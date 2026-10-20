/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSAgentAddressData, _decode_MMSAgentAddressData, _encode_MMSAgentAddressData } from "../MMSChargingDataTypes/MMSAgentAddressData.ta.mjs";
// export { MMSAgentAddressData, _decode_MMSAgentAddressData, _encode_MMSAgentAddressData } from "../MMSChargingDataTypes/MMSAgentAddressData.ta.mjs";
import { MMSRecipientType, _decode_MMSRecipientType, _encode_MMSRecipientType } from "../MMSChargingDataTypes/MMSRecipientType.ta.mjs";
// export { MMSRecipientType, _enum_for_MMSRecipientType, MMSRecipientType_tO /* IMPORTED_LONG_ENUMERATION_ITEM */, tO /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSRecipientType_cC /* IMPORTED_LONG_ENUMERATION_ITEM */, cC /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSRecipientType_bCC /* IMPORTED_LONG_ENUMERATION_ITEM */, bCC /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSRecipientType, _encode_MMSRecipientType } from "../MMSChargingDataTypes/MMSRecipientType.ta.mjs";


/**
 * @summary MMSAgentAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSAgentAddress ::= SEQUENCE {
 *    mMSAgentAddressData   [0] MMSAgentAddressData,
 *    mMSRecipientType      [1] IMPLICIT SEQUENCE  OF
 *       MMSRecipientType OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMSAgentAddress {
    /**
     * @summary `mMSAgentAddressData`.
     * @public
     * @readonly
     */
    readonly mMSAgentAddressData: MMSAgentAddressData;
    /**
     * @summary `mMSRecipientType`.
     * @public
     * @readonly
     */
    readonly mMSRecipientType: OPTIONAL<MMSRecipientType[]>;

    constructor (
        mMSAgentAddressData: MMSAgentAddressData,
        mMSRecipientType: OPTIONAL<MMSRecipientType[]>
    ) {
        this.mMSAgentAddressData = mMSAgentAddressData;
        this.mMSRecipientType = mMSRecipientType;
    }

    /**
     * @summary Restructures an object into a MMSAgentAddress
     * @description
     * 
     * This takes an `object` and converts it to a `MMSAgentAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSAgentAddress`.
     * @returns {MMSAgentAddress}
     */
    public static _from_object (_o: { [_K in keyof (MMSAgentAddress)]: (MMSAgentAddress)[_K] }): MMSAgentAddress {
        return new MMSAgentAddress(_o.mMSAgentAddressData, _o.mMSRecipientType);
    }


}

/**
 * @summary The Leading Root Component Types of MMSAgentAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSAgentAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("mMSAgentAddressData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mMSRecipientType", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MMSAgentAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSAgentAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSAgentAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSAgentAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSAgentAddress: $.ASN1Decoder<MMSAgentAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSAgentAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSAgentAddress (el: _Element): MMSAgentAddress {
    if (!_cached_decoder_for_MMSAgentAddress) { _cached_decoder_for_MMSAgentAddress = function (el: _Element): MMSAgentAddress {
    let mMSAgentAddressData!: MMSAgentAddressData;
    let mMSRecipientType: OPTIONAL<MMSRecipientType[]>;
    const callbacks: $.DecodingMap = {
        "mMSAgentAddressData": (_el: _Element): void => { mMSAgentAddressData = $._decode_explicit<MMSAgentAddressData>(() => _decode_MMSAgentAddressData)(_el); },
        "mMSRecipientType": (_el: _Element): void => { mMSRecipientType = $._decode_implicit<MMSRecipientType[]>(() => $._decodeSequenceOf<MMSRecipientType>(() => _decode_MMSRecipientType))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSAgentAddress,
        _extension_additions_list_spec_for_MMSAgentAddress,
        _root_component_type_list_2_spec_for_MMSAgentAddress,
        undefined,
    );
    return new MMSAgentAddress(
        mMSAgentAddressData,
        mMSRecipientType
    );
}; }
    return _cached_decoder_for_MMSAgentAddress(el);
}

let _cached_encoder_for_MMSAgentAddress: $.ASN1Encoder<MMSAgentAddress> | null = null;

/**
 * @summary Encodes a(n) MMSAgentAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSAgentAddress, encoded as an ASN.1 Element.
 */
export
function _encode_MMSAgentAddress (value: MMSAgentAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSAgentAddress) { _cached_encoder_for_MMSAgentAddress = function (value: MMSAgentAddress, elGetter: $.ASN1Encoder<MMSAgentAddress>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MMSAgentAddressData, $.BER)(value.mMSAgentAddressData, $.BER));
    if (value.mMSRecipientType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MMSRecipientType>(() => _encode_MMSRecipientType, $.BER), $.BER)(value.mMSRecipientType, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSAgentAddress(value, elGetter);
}


/* eslint-enable */
