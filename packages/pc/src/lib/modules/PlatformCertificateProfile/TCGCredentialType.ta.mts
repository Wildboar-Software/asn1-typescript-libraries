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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CredentialType, _decode_CredentialType, _encode_CredentialType } from "../PlatformCertificateProfile/CredentialType.ta.mjs";
/* START_OF_SYMBOL_DEFINITION TCGCredentialType */
/**
 * @summary TCGCredentialType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TCGCredentialType ::= SEQUENCE {
 *     certificateType     CredentialType }
 * ```
 * 
 * @class
 */
export
class TCGCredentialType {
    constructor (
        /**
         * @summary `certificateType`.
         * @public
         * @readonly
         */
        readonly certificateType: CredentialType
    ) {}

    /**
     * @summary Restructures an object into a TCGCredentialType
     * @description
     * 
     * This takes an `object` and converts it to a `TCGCredentialType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TCGCredentialType`.
     * @returns {TCGCredentialType}
     */
    public static _from_object (_o: { [_K in keyof (TCGCredentialType)]: (TCGCredentialType)[_K] }): TCGCredentialType {
        return new TCGCredentialType(_o.certificateType);
    }


}
/* END_OF_SYMBOL_DEFINITION TCGCredentialType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TCGCredentialType */
/**
 * @summary The Leading Root Component Types of TCGCredentialType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TCGCredentialType: $.ComponentSpec[] = [
    new $.ComponentSpec("certificateType", false, $.hasTag(_TagClass.universal, 6), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TCGCredentialType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TCGCredentialType */
/**
 * @summary The Trailing Root Component Types of TCGCredentialType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TCGCredentialType: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TCGCredentialType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TCGCredentialType */
/**
 * @summary The Extension Addition Component Types of TCGCredentialType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TCGCredentialType: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TCGCredentialType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TCGCredentialType */
let _cached_decoder_for_TCGCredentialType: $.ASN1Decoder<TCGCredentialType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TCGCredentialType */

/* START_OF_SYMBOL_DEFINITION _decode_TCGCredentialType */
/**
 * @summary Decodes an ASN.1 element into a(n) TCGCredentialType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCGCredentialType} The decoded data structure.
 */
export
function _decode_TCGCredentialType (el: _Element) {
    if (!_cached_decoder_for_TCGCredentialType) { _cached_decoder_for_TCGCredentialType = function (el: _Element): TCGCredentialType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("TCGCredentialType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "certificateType";
    let certificateType!: CredentialType;
    certificateType = _decode_CredentialType(sequence[0]);
    return new TCGCredentialType(
        certificateType,

    );
}; }
    return _cached_decoder_for_TCGCredentialType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TCGCredentialType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TCGCredentialType */
let _cached_encoder_for_TCGCredentialType: $.ASN1Encoder<TCGCredentialType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TCGCredentialType */

/* START_OF_SYMBOL_DEFINITION _encode_TCGCredentialType */
/**
 * @summary Encodes a(n) TCGCredentialType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCGCredentialType, encoded as an ASN.1 Element.
 */
export
function _encode_TCGCredentialType (value: TCGCredentialType, elGetter: $.ASN1Encoder<TCGCredentialType>) {
    if (!_cached_encoder_for_TCGCredentialType) { _cached_encoder_for_TCGCredentialType = function (value: TCGCredentialType): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CredentialType(value.certificateType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TCGCredentialType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TCGCredentialType */

/* eslint-enable */
