/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_blockingUsage
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { _decode_BlockingUsage, _encode_BlockingUsage, BlockingUsage } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/BlockingUsage.ta.mjs";



/**
 * @summary FspGetParameter_parBlockingUsage
 * @description
 * 
 * blocking-usage: permitted when the provider may place more than one Space
 * Packet in one frame. The permission applies to every MAP on this VC. Service
 * management sets it.
 * 
 * When the value is not permitted, the provider ignores the FSP-TRANSFER-DATA
 * blocking parameter, and each frame carries at most one Space Packet (section
 * 3.6.2.11).
 * 
 * Annex A2.5: permitted is 0 and notPermitted is 1.
 * 
 * CCSDS 912.3-B-3, table 3-11, section 3.1.9, section 3.6.2.11, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter-parBlockingUsage ::= SEQUENCE
 *    {  parameterName     ParameterName (blockingUsage)
 *    ,  parameterValue    BlockingUsage
 *    }
 * ```
 * 
 * @class
 */
export
class FspGetParameter_parBlockingUsage {
    /**
     * @summary `parameterName`.
     * @description
     * Fixed to `blockingUsage`, selecting blocking-usage in table 3-11. CCSDS
     * 912.3-B-3, section 3.10.2.5.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     * permitted (0) allows multiple Space Packets in one frame, on every MAP of
     * this VC. notPermitted (1) causes the provider to ignore the transfer-data
     * blocking parameter, so each frame carries at most one Space Packet. CCSDS
     * 912.3-B-3, table 3-11, section 3.6.2.11, and annex A2.5.
     * @public
     * @readonly
     */
    readonly parameterValue: BlockingUsage;

    constructor (
        parameterName: ParameterName,
        parameterValue: BlockingUsage
    ) {
        if (parameterName !== ParameterName_blockingUsage) {
            throw new ASN1Error("FspGetParameter_parBlockingUsage.parameterName violates ParameterName (blockingUsage)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a FspGetParameter_parBlockingUsage
     * @description
     * 
     * This takes an `object` and converts it to a `FspGetParameter_parBlockingUsage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspGetParameter_parBlockingUsage`.
     * @returns {FspGetParameter_parBlockingUsage}
     */
    public static _from_object (_o: { [_K in keyof (FspGetParameter_parBlockingUsage)]: (FspGetParameter_parBlockingUsage)[_K] }): FspGetParameter_parBlockingUsage {
        return new FspGetParameter_parBlockingUsage(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of FspGetParameter_parBlockingUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspGetParameter_parBlockingUsage: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspGetParameter_parBlockingUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspGetParameter_parBlockingUsage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspGetParameter_parBlockingUsage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspGetParameter_parBlockingUsage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspGetParameter_parBlockingUsage: $.ASN1Decoder<FspGetParameter_parBlockingUsage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter_parBlockingUsage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter_parBlockingUsage (el: _Element): FspGetParameter_parBlockingUsage {
    if (!_cached_decoder_for_FspGetParameter_parBlockingUsage) { _cached_decoder_for_FspGetParameter_parBlockingUsage = function (el: _Element): FspGetParameter_parBlockingUsage {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FspGetParameter-parBlockingUsage contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: BlockingUsage;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_BlockingUsage(sequence[1]);
    return new FspGetParameter_parBlockingUsage(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_FspGetParameter_parBlockingUsage(el);
}

let _cached_encoder_for_FspGetParameter_parBlockingUsage: $.ASN1Encoder<FspGetParameter_parBlockingUsage> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter_parBlockingUsage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter_parBlockingUsage, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter_parBlockingUsage (value: FspGetParameter_parBlockingUsage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter_parBlockingUsage) { _cached_encoder_for_FspGetParameter_parBlockingUsage = function (value: FspGetParameter_parBlockingUsage, _elGetter: $.ASN1Encoder<FspGetParameter_parBlockingUsage>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_BlockingUsage(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspGetParameter_parBlockingUsage(value, elGetter);
}


/* eslint-enable */
