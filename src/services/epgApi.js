export async function getEPGPrograms(channel, startDate, endDate) {
    const response = await fetch(
        `http://ott.online.meo.pt/program/v9/Programs/LiveChannelPrograms?UserAgent=AND_NG&$filter=StartDate+ge+datetime'${startDate}'+and+StartDate+lt+datetime'${endDate}'+and+CallLetter+eq+'${channel}'&$orderby=StartDate+asc`
    );
    const data = await response.json();
    return data;
}