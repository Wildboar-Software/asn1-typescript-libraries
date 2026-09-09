import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TimeIfNoTariffSwitch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeIfNoTariffSwitch ::= INTEGER(0..864000)
 * ```
 *
 */
export type TimeIfNoTariffSwitch = INTEGER;
export const _decode_TimeIfNoTariffSwitch = $._decodeInteger;
export const _encode_TimeIfNoTariffSwitch = $._encodeInteger;
