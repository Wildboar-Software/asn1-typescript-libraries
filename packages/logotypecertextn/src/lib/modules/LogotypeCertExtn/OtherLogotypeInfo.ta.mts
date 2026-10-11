/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LogotypeInfo, _decode_LogotypeInfo, _encode_LogotypeInfo } from "../LogotypeCertExtn/LogotypeInfo.ta.mjs";
// export { LogotypeInfo, _decode_LogotypeInfo, _encode_LogotypeInfo } from "../LogotypeCertExtn/LogotypeInfo.ta.mjs";


/**
 * @summary OtherLogotypeInfo
 * @description
 *
 * One logotype whose class is an object identifier, used when none of
 * the three standard positions in {@link LogotypeExtn} fits. The OID
 * is either defined locally or one of the identifiers in
 * [section 4.2](https://www.rfc-editor.org/rfc/rfc3709#section-4.2).
 * What the logotype means in a given application is decided by that
 * application.
 *
 * [RFC 3709, section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1)
 * and [section 4.2](https://www.rfc-editor.org/rfc/rfc3709#section-4.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherLogotypeInfo ::= SEQUENCE {
 *    logotypeType    OBJECT IDENTIFIER,
 *    info            LogotypeInfo }
 * ```
 * 
 * @class
 */
export
class OtherLogotypeInfo {
    constructor (
        /**
         * Class of this logotype. {@link id_logo_loyalty} and
         * {@link id_logo_background} are defined here; any other OID
         * is a local definition.
         *
         * [RFC 3709, section 4.2](https://www.rfc-editor.org/rfc/rfc3709#section-4.2).
         * @public
         * @readonly
         */
        readonly logotypeType: OBJECT_IDENTIFIER,
        /**
         * The logotype data, addressed directly or indirectly.
         * @public
         * @readonly
         */
        readonly info: LogotypeInfo
    ) {}

    /**
     * @summary Restructures an object into a OtherLogotypeInfo
     * @description
     * 
     * This takes an `object` and converts it to a `OtherLogotypeInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherLogotypeInfo`.
     * @returns {OtherLogotypeInfo}
     */
    public static _from_object (_o: { [_K in keyof (OtherLogotypeInfo)]: (OtherLogotypeInfo)[_K] }): OtherLogotypeInfo {
        return new OtherLogotypeInfo(_o.logotypeType, _o.info);
    }


}

/**
 * @summary The Leading Root Component Types of OtherLogotypeInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OtherLogotypeInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("logotypeType", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("info", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of OtherLogotypeInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OtherLogotypeInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OtherLogotypeInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OtherLogotypeInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OtherLogotypeInfo: $.ASN1Decoder<OtherLogotypeInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherLogotypeInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherLogotypeInfo (el: _Element): OtherLogotypeInfo {
    if (!_cached_decoder_for_OtherLogotypeInfo) { _cached_decoder_for_OtherLogotypeInfo = function (el: _Element): OtherLogotypeInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("OtherLogotypeInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "logotypeType";
    sequence[1].name = "info";
    const logotypeType: OBJECT_IDENTIFIER = $._decodeObjectIdentifier(sequence[0]);
    const info: LogotypeInfo = _decode_LogotypeInfo(sequence[1]);
    return new OtherLogotypeInfo(
        logotypeType,
        info,

    );
}; }
    return _cached_decoder_for_OtherLogotypeInfo(el);
}

let _cached_encoder_for_OtherLogotypeInfo: $.ASN1Encoder<OtherLogotypeInfo> | null = null;

/**
 * @summary Encodes a(n) OtherLogotypeInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherLogotypeInfo, encoded as an ASN.1 Element.
 */
export
function _encode_OtherLogotypeInfo (value: OtherLogotypeInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherLogotypeInfo) { _cached_encoder_for_OtherLogotypeInfo = function (value: OtherLogotypeInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.logotypeType, $.BER),
            /* REQUIRED   */ _encode_LogotypeInfo(value.info, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OtherLogotypeInfo(value, elGetter);
}


/* eslint-enable */
