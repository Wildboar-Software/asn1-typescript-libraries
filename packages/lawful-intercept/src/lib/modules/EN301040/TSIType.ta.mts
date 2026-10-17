/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCCType, _decode_MCCType, _encode_MCCType } from "../EN301040/MCCType.ta.mjs";
// export { MCCType, _decode_MCCType, _encode_MCCType } from "../EN301040/MCCType.ta.mjs";
import { MNCType, _decode_MNCType, _encode_MNCType } from "../EN301040/MNCType.ta.mjs";
// export { MNCType, _decode_MNCType, _encode_MNCType } from "../EN301040/MNCType.ta.mjs";
import { SSIType, _decode_SSIType, _encode_SSIType } from "../EN301040/SSIType.ta.mjs";
// export { SSIType, _decode_SSIType, _encode_SSIType } from "../EN301040/SSIType.ta.mjs";


/**
 * @summary TSIType
 * @description
 * 
 * TETRA Subscriber Identity: mobile country code, mobile network code, and
 * short subscriber identity, as defined for those fields in EN 300 392-1. An
 * individual ITSI and a group GTSI share one flat address space (clause 4.2).
 * Groups the target belongs to are those its ITSI has attached to, whether the
 * mobile requested the attachment, the SwMI enforced it, or the attachment is
 * permanent. Group communication stops being intercepted when the SwMI treats
 * the mobile as detached, for example by explicit detachment or deregistration
 * (clause 4.2). The GTSI is reported as used by the ITSI when the operator
 * believes the target is in the group. If the group requires dynamic attachment
 * and the target has not attached, there is no ITSI-to-GTSI association
 * (clause 4.3.4). See EN 300 392-2.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.2, clause 4.2, clause 4.3.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSIType ::= SEQUENCE {
 *     mcc        MCCType,
 *     mnc        MNCType,
 *     ssi        SSIType
 * }
 * ```
 * 
 * @class
 */
export
class TSIType {
    /**
     * @summary `mcc`.
     * @description
     *
     * Mobile Country Code, 10 bits, as defined in EN 300 392-1. On
     * initialization of interception, `mcc` may be filled with a system default
     * (clause 6.8.1).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.2, clause 6.8.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly mcc: MCCType;
    /**
     * @summary `mnc`.
     * @description
     *
     * Mobile Network Code, 14 bits, as defined in EN 300 392-1. On
     * initialization of interception, `mnc` may be filled with a system default
     * (clause 6.8.1).
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.2, clause 6.8.1.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly mnc: MNCType;
    /**
     * @summary `ssi`.
     * @description
     *
     * Short Subscriber Identity, 24 bits, as defined in EN 300 392-1.
     *
     * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.2.
     * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
     *
     * @public
     * @readonly
     */
    readonly ssi: SSIType;

    constructor (
        mcc: MCCType,
        mnc: MNCType,
        ssi: SSIType
    ) {
        this.mcc = mcc;
        this.mnc = mnc;
        this.ssi = ssi;
    }

    /**
     * @summary Restructures an object into a TSIType
     * @description
     * 
     * This takes an `object` and converts it to a `TSIType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSIType`.
     * @returns {TSIType}
     */
    public static _from_object (_o: { [_K in keyof (TSIType)]: (TSIType)[_K] }): TSIType {
        return new TSIType(_o.mcc, _o.mnc, _o.ssi);
    }


}

/**
 * @summary The Leading Root Component Types of TSIType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSIType: $.ComponentSpec[] = [
    new $.ComponentSpec("mcc", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mnc", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ssi", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TSIType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSIType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSIType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSIType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSIType: $.ASN1Decoder<TSIType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSIType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSIType (el: _Element): TSIType {
    if (!_cached_decoder_for_TSIType) { _cached_decoder_for_TSIType = function (el: _Element): TSIType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TSIType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mcc";
    sequence[1].name = "mnc";
    sequence[2].name = "ssi";
    let mcc!: MCCType;
    let mnc!: MNCType;
    let ssi!: SSIType;
    mcc = _decode_MCCType(sequence[0]);
    mnc = _decode_MNCType(sequence[1]);
    ssi = _decode_SSIType(sequence[2]);
    return new TSIType(
        mcc,
        mnc,
        ssi,

    );
}; }
    return _cached_decoder_for_TSIType(el);
}

let _cached_encoder_for_TSIType: $.ASN1Encoder<TSIType> | null = null;

/**
 * @summary Encodes a(n) TSIType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSIType, encoded as an ASN.1 Element.
 */
export
function _encode_TSIType (value: TSIType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSIType) { _cached_encoder_for_TSIType = function (value: TSIType, elGetter: $.ASN1Encoder<TSIType>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MCCType, $.BER)(value.mcc, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MNCType, $.BER)(value.mnc, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SSIType, $.BER)(value.ssi, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_TSIType(value, elGetter);
}


/* eslint-enable */
