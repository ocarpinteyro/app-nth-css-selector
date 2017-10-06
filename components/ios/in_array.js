exports.in_array=function(r,n,i){var e="",f=!!i;if(f){for(e in n)if(n[e]===r)return!0}else for(e in n)if(n[e]==r)return!0;return!1};
