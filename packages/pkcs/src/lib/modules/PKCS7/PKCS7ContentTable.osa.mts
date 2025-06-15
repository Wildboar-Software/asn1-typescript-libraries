/* eslint-disable */
import { authenticated_data } from "../PKCS7/authenticated-data.oa.mjs";
import { data } from "../PKCS7/data.oa.mjs";
import { digested_data } from "../PKCS7/digested-data.oa.mjs";
import { encrypted_data } from "../PKCS7/encrypted-data.oa.mjs";
import { enveloped_data } from "../PKCS7/enveloped-data.oa.mjs";
import { PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca.mjs";
import { signed_and_enveloped_data } from "../PKCS7/signed-and-enveloped-data.oa.mjs";
import { signed_data } from "../PKCS7/signed-data.oa.mjs";

/**
 * @summary PKCS7ContentTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS7ContentTable PKCS7-CONTENT-TYPE ::= {data | signed-data | enveloped-data | signed-and-enveloped-data |
 *     digested-data | encrypted-data | authenticated-data, ...}
 * ```
 *
 * @constant
 * @type {PKCS7_CONTENT_TYPE[]}
 *
 */
export const PKCS7ContentTable: PKCS7_CONTENT_TYPE<any>[] = [
    data,
    signed_data,
    enveloped_data,
    signed_and_enveloped_data,
    digested_data,
    encrypted_data,
    authenticated_data,
];

/* eslint-enable */
