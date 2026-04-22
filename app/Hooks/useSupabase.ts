"use client";
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useSupabase(tableName: string) {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data: result, error: fetchError } = await supabase
                    .from(tableName)
                    .select('*')
                    .order('id', { ascending: true });

                if (fetchError) throw fetchError;
                setData(result || []);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [tableName]);

    return { data, loading, error };
}