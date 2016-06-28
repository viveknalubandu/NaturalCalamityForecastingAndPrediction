__author__ = 'anupdudani'
def encode_feature(df, feature_column):
    """Add column to df with integers for the target.

    Args
    ----
    df -- pandas DataFrame.
    target_column -- column to map to int, producing
                     new Target column.

    Returns
    -------
    df_mod -- modified DataFrame.
    targets -- list of target names.
    """
    df_mod = df.copy()
    features = df_mod[feature_column].unique() # yes, no # high medium low
    map_to_int = {name: n for n, name in enumerate(features)}
    df_mod[feature_column+"_param"] = df_mod[feature_column].replace(map_to_int)

    return (df_mod)
"""
def feature( listOflabels, modified_df):
    for i in len(listOflabels):
        listOftuples
    feature_list=[]
    for itertuples in modified_df[listOflabels].itertuples(index=False):
        feature_list.append([itertuples])
    print feature_list
"""