/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';
import {
    _decode_PersonNumber,
    _encode_PersonNumber,
} from '../X790ASN1Module/PersonNumber.ta.mjs';
import {
    _decode_PersonName,
    _encode_PersonName,
} from '../X790ASN1Module/PersonName.ta.mjs';
import {
    _decode_PersonPhone,
    _encode_PersonPhone,
} from '../X790ASN1Module/PersonPhone.ta.mjs';
import {
    _decode_PersonLocation,
    _encode_PersonLocation,
} from '../X790ASN1Module/PersonLocation.ta.mjs';
import {
    _decode_PersonEmail,
    _encode_PersonEmail,
} from '../X790ASN1Module/PersonEmail.ta.mjs';
import {
    _decode_PersonFax,
    _encode_PersonFax,
} from '../X790ASN1Module/PersonFax.ta.mjs';
import {
    _decode_PersonRespon,
    _encode_PersonRespon,
} from '../X790ASN1Module/PersonRespon.ta.mjs';

/**
 * @summary troubleClearancePersonTroubleClearancePersonDefault
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * troubleClearancePersonTroubleClearancePersonDefault PersonReach ::= {number "", name ""}
 * ```
 *
 * @constant
 */
export const troubleClearancePersonTroubleClearancePersonDefault: PersonReach = PersonReach._from_object(
    {
        number_: '',
        name: '',
        phone: undefined,
        loc: undefined,
        email: undefined,
        fax: undefined,
        respon: undefined,
        _unrecognizedExtensionsList: undefined,
    },
);

/* eslint-enable */
