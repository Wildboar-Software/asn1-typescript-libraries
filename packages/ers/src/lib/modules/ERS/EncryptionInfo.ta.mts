/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EncryptionInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionInfo ::= SEQUENCE {
 *     encryptionInfoType   ENCINFO-TYPE.&id({SupportedEncryptionAlgorithms}),
 *     encryptionInfoValue  ENCINFO-TYPE.&Type
 *                 ({SupportedEncryptionAlgorithms}{@encryptionInfoType}) }
 * ```
 *
 */
export
class EncryptionInfo {
    constructor (
        /**
         * @summary `encryptionInfoType`.
         * @public
         * @readonly
         */
        readonly encryptionInfoType: OBJECT_IDENTIFIER,
        /**
         * @summary `encryptionInfoValue`.
         * @public
         * @readonly
         */
        readonly encryptionInfoValue: _Element
    ) {}

    /**
     * @summary Restructures an object into a EncryptionInfo
     * @description
     *
     * This takes an `object` and converts it to a `EncryptionInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptionInfo`.
     * @returns {EncryptionInfo}
     */
    public static _from_object (_o: { [_K in keyof (EncryptionInfo)]: (EncryptionInfo)[_K] }): EncryptionInfo {
        return new EncryptionInfo(_o.encryptionInfoType, _o.encryptionInfoValue);
    }


}


/**
 * @summary The Leading Root Component Types of EncryptionInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EncryptionInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("encryptionInfoType", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("encryptionInfoValue", false, $.hasAnyTag)
];


/**
 * @summary The Trailing Root Component Types of EncryptionInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EncryptionInfo: $.ComponentSpec[] = [

];


/**
 * @summary The Extension Addition Component Types of EncryptionInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_EncryptionInfo: $.ComponentSpec[] = [

];


let _cached_decoder_for_EncryptionInfo: $.ASN1Decoder<EncryptionInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncryptionInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptionInfo} The decoded data structure.
 */
export
function _decode_EncryptionInfo (el: _Element): EncryptionInfo {
    if (!_cached_decoder_for_EncryptionInfo) { _cached_decoder_for_EncryptionInfo = function (el: _Element): EncryptionInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EncryptionInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "encryptionInfoType";
    sequence[1].name = "encryptionInfoValue";
    let encryptionInfoType!: OBJECT_IDENTIFIER;
    let encryptionInfoValue!: _Element;
    encryptionInfoType = $._decodeObjectIdentifier(sequence[0]);
    encryptionInfoValue = $._decodeAny(sequence[1]);
    return new EncryptionInfo(
        encryptionInfoType,
        encryptionInfoValue,

    );
}; }
    return _cached_decoder_for_EncryptionInfo(el);
}


let _cached_encoder_for_EncryptionInfo: $.ASN1Encoder<EncryptionInfo> | null = null;


/**
 * @summary Encodes a(n) EncryptionInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptionInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EncryptionInfo (value: EncryptionInfo, elGetter: $.ASN1Encoder<EncryptionInfo>): _Element {
    if (!_cached_encoder_for_EncryptionInfo) { _cached_encoder_for_EncryptionInfo = function (value: EncryptionInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.encryptionInfoType, $.DER),
            /* REQUIRED   */ $._encodeAny(value.encryptionInfoValue, $.DER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_EncryptionInfo(value, elGetter);
}


/* eslint-enable */
