/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";


/**
 * @summary SDFProtocolInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDFProtocolInfo ::= SEQUENCE {
 *   entryname  DistinguishedName,
 *   attribute  OBJECT IDENTIFIER
 * }
 * ```
 * 
 * @class
 */
export
class SDFProtocolInfo {
    /**
     * @summary `entryname`.
     * @public
     * @readonly
     */
    readonly entryname: DistinguishedName;
    /**
     * @summary `attribute`.
     * @public
     * @readonly
     */
    readonly attribute: OBJECT_IDENTIFIER;

    constructor (
        entryname: DistinguishedName,
        attribute: OBJECT_IDENTIFIER
    ) {
        this.entryname = entryname;
        this.attribute = attribute;
    }

    /**
     * @summary Restructures an object into a SDFProtocolInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SDFProtocolInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SDFProtocolInfo`.
     * @returns {SDFProtocolInfo}
     */
    public static _from_object (_o: { [_K in keyof (SDFProtocolInfo)]: (SDFProtocolInfo)[_K] }): SDFProtocolInfo {
        return new SDFProtocolInfo(_o.entryname, _o.attribute);
    }


}

/**
 * @summary The Leading Root Component Types of SDFProtocolInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SDFProtocolInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("entryname", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("attribute", false, $.hasTag(_TagClass.universal, 6))
];

/**
 * @summary The Trailing Root Component Types of SDFProtocolInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SDFProtocolInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SDFProtocolInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SDFProtocolInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SDFProtocolInfo: $.ASN1Decoder<SDFProtocolInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SDFProtocolInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SDFProtocolInfo (el: _Element): SDFProtocolInfo {
    if (!_cached_decoder_for_SDFProtocolInfo) { _cached_decoder_for_SDFProtocolInfo = function (el: _Element): SDFProtocolInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SDFProtocolInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "entryname";
    sequence[1].name = "attribute";
    const entryname: DistinguishedName = _decode_DistinguishedName(sequence[0]);
    const attribute: OBJECT_IDENTIFIER = $._decodeObjectIdentifier(sequence[1]);
    return new SDFProtocolInfo(
        entryname,
        attribute,

    );
}; }
    return _cached_decoder_for_SDFProtocolInfo(el);
}

let _cached_encoder_for_SDFProtocolInfo: $.ASN1Encoder<SDFProtocolInfo> | null = null;

/**
 * @summary Encodes a(n) SDFProtocolInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDFProtocolInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SDFProtocolInfo (value: SDFProtocolInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SDFProtocolInfo) { _cached_encoder_for_SDFProtocolInfo = function (value: SDFProtocolInfo, elGetter: $.ASN1Encoder<SDFProtocolInfo>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_DistinguishedName(value.entryname, $.BER),
        /* REQUIRED   */ $._encodeObjectIdentifier(value.attribute, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SDFProtocolInfo(value, elGetter);
}


/* eslint-enable */
