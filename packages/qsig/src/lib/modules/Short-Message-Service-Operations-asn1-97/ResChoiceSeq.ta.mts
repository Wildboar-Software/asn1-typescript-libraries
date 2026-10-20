/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";

/**
 * @summary ResChoiceSeq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResChoiceSeq ::= SEQUENCE {
 *     protocolIdentifier ProtocolIdentifier,
 *     userData UserData
 * }
 * ```
 * 
 * @class
 */
export
class ResChoiceSeq {
    /**
     * @summary `protocolIdentifier`.
     * @public
     * @readonly
     */
    readonly protocolIdentifier: ProtocolIdentifier;
    /**
     * @summary `userData`.
     * @public
     * @readonly
     */
    readonly userData: UserData;

    constructor (
        protocolIdentifier: ProtocolIdentifier,
        userData: UserData
    ) {
        this.protocolIdentifier = protocolIdentifier;
        this.userData = userData;
    }

    /**
     * @summary Restructures an object into a ResChoiceSeq
     * @description
     * 
     * This takes an `object` and converts it to a `ResChoiceSeq`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResChoiceSeq`.
     * @returns {ResChoiceSeq}
     */
    public static _from_object (_o: { [_K in keyof (ResChoiceSeq)]: (ResChoiceSeq)[_K] }): ResChoiceSeq {
        return new ResChoiceSeq(_o.protocolIdentifier, _o.userData);
    }

}

/**
 * @summary The Leading Root Component Types of ResChoiceSeq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResChoiceSeq: $.ComponentSpec[] = [
    new $.ComponentSpec("protocolIdentifier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("userData", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ResChoiceSeq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResChoiceSeq: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResChoiceSeq
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResChoiceSeq: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResChoiceSeq: $.ASN1Decoder<ResChoiceSeq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResChoiceSeq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResChoiceSeq (el: _Element): ResChoiceSeq {
    if (!_cached_decoder_for_ResChoiceSeq) { _cached_decoder_for_ResChoiceSeq = function (el: _Element): ResChoiceSeq {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ResChoiceSeq contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "protocolIdentifier";
    sequence[1].name = "userData";
    let protocolIdentifier!: ProtocolIdentifier;
    let userData!: UserData;
    protocolIdentifier = _decode_ProtocolIdentifier(sequence[0]);
    userData = _decode_UserData(sequence[1]);
    return new ResChoiceSeq(
        protocolIdentifier,
        userData,

    );
}; }
    return _cached_decoder_for_ResChoiceSeq(el);
}

let _cached_encoder_for_ResChoiceSeq: $.ASN1Encoder<ResChoiceSeq> | null = null;

/**
 * @summary Encodes a(n) ResChoiceSeq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResChoiceSeq, encoded as an ASN.1 Element.
 */
export
function _encode_ResChoiceSeq (value: ResChoiceSeq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResChoiceSeq) { _cached_encoder_for_ResChoiceSeq = function (value: ResChoiceSeq, elGetter: $.ASN1Encoder<ResChoiceSeq>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ProtocolIdentifier(value.protocolIdentifier, $.BER),
        /* REQUIRED   */ _encode_UserData(value.userData, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ResChoiceSeq(value, elGetter);
}

/* eslint-enable */
