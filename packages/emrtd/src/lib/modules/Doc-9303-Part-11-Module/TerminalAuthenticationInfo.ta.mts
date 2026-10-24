/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1Error,
    ASN1TagClass as _TagClass,
    type INTEGER,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_TA } from "../Doc-9303-Part-11-Module/id-TA.va.mjs";



/**
 * @summary TerminalAuthenticationInfo
 * @description
 *
 * Announces Terminal Authentication version 1. `protocol` is `id-TA`.
 * `version` must be 1.
 *
 * Section 9.2.8 defines this structure with those two components.
 * Informative Appendix K, for European Extended Access Control, shows a
 * third optional component, `efCVCA` of type `FileID`, used when EF.CVCA
 * cannot keep its default identifier `0x011C` (short file identifier
 * `0x1C`). This module follows section 9.2.8 and does not include `efCVCA`.
 * `FileID` is still declared for that appendix.
 *
 * Doc 9303-11, sections 7.1, 9.2.8, and Appendix K.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalAuthenticationInfo ::= SEQUENCE {
 *     protocol    OBJECT IDENTIFIER(id-TA),
 *     version     INTEGER -- MUST be 1
 * }
 * ```
 * 
 * @class
 */
export
class TerminalAuthenticationInfo {
    /**
     * `id-TA`. The signature algorithm is not selected here.
     * @summary `protocol`.
     * @public
     * @readonly
     */
    public readonly protocol: OBJECT_IDENTIFIER;
    /**
     * Protocol version. This specification supports only version 1.
     * @summary `version`.
     * @public
     * @readonly
     */
    public readonly version: INTEGER;

    constructor (
        protocol: OBJECT_IDENTIFIER,
        version: INTEGER
    ) {
        this.protocol = protocol;
        this.version = version;
        if (!id_TA.isEqualTo(protocol)) {
            throw new ASN1Error("TerminalAuthenticationInfo.protocol violates permitted OBJECT IDENTIFIER constraint");
        }
    }

    /**
     * @summary Restructures an object into a TerminalAuthenticationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TerminalAuthenticationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminalAuthenticationInfo`.
     * @returns {TerminalAuthenticationInfo}
     */
    public static _from_object (_o: { [_K in keyof (TerminalAuthenticationInfo)]: (TerminalAuthenticationInfo)[_K] }): TerminalAuthenticationInfo {
        return new TerminalAuthenticationInfo(_o.protocol, _o.version);
    }


}

/**
 * @summary The Leading Root Component Types of TerminalAuthenticationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TerminalAuthenticationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("protocol", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of TerminalAuthenticationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TerminalAuthenticationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TerminalAuthenticationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TerminalAuthenticationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TerminalAuthenticationInfo: $.ASN1Decoder<TerminalAuthenticationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminalAuthenticationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminalAuthenticationInfo (el: _Element): TerminalAuthenticationInfo {
    if (!_cached_decoder_for_TerminalAuthenticationInfo) { _cached_decoder_for_TerminalAuthenticationInfo = function (el: _Element): TerminalAuthenticationInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TerminalAuthenticationInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "protocol";
    sequence[1].name = "version";
    const protocol: OBJECT_IDENTIFIER = $._decodeObjectIdentifier(sequence[0]);
    const version: INTEGER = $._decodeInteger(sequence[1]);
    return new TerminalAuthenticationInfo(
        protocol,
        version,

    );
}; }
    return _cached_decoder_for_TerminalAuthenticationInfo(el);
}

let _cached_encoder_for_TerminalAuthenticationInfo: $.ASN1Encoder<TerminalAuthenticationInfo> | null = null;

/**
 * @summary Encodes a(n) TerminalAuthenticationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminalAuthenticationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TerminalAuthenticationInfo (value: TerminalAuthenticationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminalAuthenticationInfo) { _cached_encoder_for_TerminalAuthenticationInfo = function (value: TerminalAuthenticationInfo, elGetter: $.ASN1Encoder<TerminalAuthenticationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.protocol, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.version, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TerminalAuthenticationInfo(value, elGetter);
}


/* eslint-enable */
