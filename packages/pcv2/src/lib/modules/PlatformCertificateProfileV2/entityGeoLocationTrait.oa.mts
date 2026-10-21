/* eslint-disable */
import { EntityGeoLocation, _decode_EntityGeoLocation, _encode_EntityGeoLocation } from "../PlatformCertificateProfileV2/EntityGeoLocation.ta.mjs";
import { tcg_tr_ID_entGeoLocation } from "../PlatformCertificateProfileV2/tcg-tr-ID-entGeoLocation.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary entityGeoLocationTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * entityGeoLocationTrait TRAIT ::= {
 *     SYNTAX          EntityGeoLocation
 *     IDENTIFIED BY   tcg-tr-ID-entGeoLocation
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<EntityGeoLocation>}
 * @implements {TRAIT<EntityGeoLocation>}
 */
export
const entityGeoLocationTrait: TRAIT<EntityGeoLocation> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_EntityGeoLocation,
    },
    encoderFor: {
        "&TraitValueType": _encode_EntityGeoLocation,
    },
    "&id": tcg_tr_ID_entGeoLocation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
