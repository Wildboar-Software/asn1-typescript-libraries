/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ParameterName, _decode_ParameterName, _encode_ParameterName,
    ParameterName_bufferSize
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { type IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";



/**
 * @summary RcfGetParameter_parBufferSize
 * @description
 *
 * Returned value of transfer-buffer-size. Service management sets how many
 * RCF-TRANSFER-DATA and RCF-SYNC-NOTIFY invocations the transfer buffer holds.
 * In timely online mode the provider temporarily treats the buffer as one
 * larger while a data-discarded notification occupies a slot, then restores
 * the configured size after the buffer is passed. Annex C requires capacity
 * for at least 200 RCF-TRANSFER-DATA invocations.
 *
 * CCSDS 911.2-B-4, section 3.1.9, table 3-11, and annex C.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfGetParameter-parBufferSize ::= SEQUENCE
 *    { parameterName                  ParameterName (bufferSize)
 *    , parameterValue                 IntPosShort
 *                                     -- bufferSize in number of invocations
 *                                     -- that can be held in buffer
 *     }
 * ```
 * 
 * @class
 */
export
class RcfGetParameter_parBufferSize {
    /**
     * @summary `parameterName`.
     * @description
     *
     * Identifies this value as transfer-buffer-size (bufferSize).
     *
     * CCSDS 911.2-B-4, table 3-11.
     * @public
     * @readonly
     */
    readonly parameterName: ParameterName;
    /**
     * @summary `parameterValue`.
     * @description
     *
     * Number of RCF-TRANSFER-DATA and RCF-SYNC-NOTIFY invocations the transfer
     * buffer can hold. See the type description for the timely-online size
     * adjustment and the annex C minimum.
     *
     * CCSDS 911.2-B-4, section 3.1.9 and table 3-11.
     * @public
     * @readonly
     */
    readonly parameterValue: IntPosShort;

    constructor (
        parameterName: ParameterName,
        parameterValue: IntPosShort
    ) {
        if (parameterName !== ParameterName_bufferSize) {
            throw new ASN1Error("RcfGetParameter_parBufferSize.parameterName violates ParameterName (bufferSize)");
        }
        this.parameterName = parameterName;
        this.parameterValue = parameterValue;
    }

    /**
     * @summary Restructures an object into a RcfGetParameter_parBufferSize
     * @description
     * 
     * This takes an `object` and converts it to a
     * `RcfGetParameter_parBufferSize`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfGetParameter_parBufferSize`.
     * @returns {RcfGetParameter_parBufferSize}
     */
    public static _from_object (_o: { [_K in keyof (RcfGetParameter_parBufferSize)]: (RcfGetParameter_parBufferSize)[_K] }): RcfGetParameter_parBufferSize {
        return new RcfGetParameter_parBufferSize(_o.parameterName, _o.parameterValue);
    }


}

/**
 * @summary The Leading Root Component Types of RcfGetParameter_parBufferSize
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfGetParameter_parBufferSize: $.ComponentSpec[] = [
    new $.ComponentSpec("parameterName", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parameterValue", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of RcfGetParameter_parBufferSize
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfGetParameter_parBufferSize: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfGetParameter_parBufferSize
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfGetParameter_parBufferSize: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfGetParameter_parBufferSize: $.ASN1Decoder<RcfGetParameter_parBufferSize> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfGetParameter_parBufferSize
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfGetParameter_parBufferSize (el: _Element): RcfGetParameter_parBufferSize {
    if (!_cached_decoder_for_RcfGetParameter_parBufferSize) { _cached_decoder_for_RcfGetParameter_parBufferSize = function (el: _Element): RcfGetParameter_parBufferSize {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RcfGetParameter-parBufferSize contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "parameterName";
    sequence[1].name = "parameterValue";
    let parameterName!: ParameterName;
    let parameterValue!: IntPosShort;
    parameterName = _decode_ParameterName(sequence[0]);
    parameterValue = _decode_IntPosShort(sequence[1]);
    return new RcfGetParameter_parBufferSize(
        parameterName,
        parameterValue,

    );
}; }
    return _cached_decoder_for_RcfGetParameter_parBufferSize(el);
}

let _cached_encoder_for_RcfGetParameter_parBufferSize: $.ASN1Encoder<RcfGetParameter_parBufferSize> | null = null;

/**
 * @summary Encodes a(n) RcfGetParameter_parBufferSize into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfGetParameter_parBufferSize, encoded as an ASN.1 Element.
 */
export
function _encode_RcfGetParameter_parBufferSize (value: RcfGetParameter_parBufferSize, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfGetParameter_parBufferSize) { _cached_encoder_for_RcfGetParameter_parBufferSize = function (value: RcfGetParameter_parBufferSize, _elGetter: $.ASN1Encoder<RcfGetParameter_parBufferSize>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ParameterName(value.parameterName, $.BER),
        /* REQUIRED   */ _encode_IntPosShort(value.parameterValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfGetParameter_parBufferSize(value, elGetter);
}


/* eslint-enable */
