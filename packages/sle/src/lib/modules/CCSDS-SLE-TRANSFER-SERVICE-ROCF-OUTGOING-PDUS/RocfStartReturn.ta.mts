/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { RocfStartReturn_result, _decode_RocfStartReturn_result, _encode_RocfStartReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-OUTGOING-PDUS/RocfStartReturn-result.ta.mjs";


/**
 * @summary RocfStartReturn
 * @description
 * 
 * Provider return for ROCF-START. A positive result means the provider has
 * entered state 3 (active) and will deliver every available OCF that meets the
 * START criteria. A negative result leaves the state unchanged and the
 * provider delivers no OCFs. Checks should be applied in the order the
 * diagnostics are listed in section 3.4.2.12, and the first problem found is
 * the one reported.
 *
 * CCSDS 911.5-B-4, sections 3.1.3.4, 3.4.2.11, 3.4.2.12, and 3.4.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfStartReturn ::= SEQUENCE
 * {  performerCredentials    Credentials
 * ,  invokeId                InvokeId
 * ,  result                  CHOICE
 *    {  positiveResult    [0]   NULL
 *    ,  negativeResult    [1]   DiagnosticRocfStart
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class RocfStartReturn {
    /**
     * @summary `performerCredentials`.
     * @description
     * 
     * Credentials the invoker uses to authenticate this return. When
     * authentication of the return is not required, the value is unused. The
     * octet layout is the bilaterally agreed algorithm, which this
     * specification leaves unspecified. CCSDS 911.5-B-4, sections 3.1.5 and
     * 3.4.2.3.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * 
     * Integer chosen by the invoker. The performer returns it unchanged so the
     * return can be matched to this invocation. A value that duplicates an
     * invoke-ID still awaiting confirmation in this service instance is
     * rejected. CCSDS 911.5-B-4, sections 3.1.6 and 3.4.2.4.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `result`.
     * @description
     * 
     * positiveResult reports that START was performed. negativeResult carries
     * DiagnosticRocfStart and reports that START was not performed.
     *
     * CCSDS 911.5-B-4, sections 3.4.2.11 and 3.4.2.12.
     * @public
     * @readonly
     */
    readonly result: RocfStartReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        result: RocfStartReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a RocfStartReturn
     * @description
     * 
     * This takes an `object` and converts it to a `RocfStartReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfStartReturn`.
     * @returns {RocfStartReturn}
     */
    public static _from_object (_o: { [_K in keyof (RocfStartReturn)]: (RocfStartReturn)[_K] }): RocfStartReturn {
        return new RocfStartReturn(_o.performerCredentials, _o.invokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of RocfStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfStartReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RocfStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfStartReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfStartReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfStartReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfStartReturn: $.ASN1Decoder<RocfStartReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfStartReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfStartReturn (el: _Element): RocfStartReturn {
    if (!_cached_decoder_for_RocfStartReturn) { _cached_decoder_for_RocfStartReturn = function (el: _Element): RocfStartReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RocfStartReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let result!: RocfStartReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    result = _decode_RocfStartReturn_result(sequence[2]);
    return new RocfStartReturn(
        performerCredentials,
        invokeId,
        result,

    );
}; }
    return _cached_decoder_for_RocfStartReturn(el);
}

let _cached_encoder_for_RocfStartReturn: $.ASN1Encoder<RocfStartReturn> | null = null;

/**
 * @summary Encodes a(n) RocfStartReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfStartReturn, encoded as an ASN.1 Element.
 */
export
function _encode_RocfStartReturn (value: RocfStartReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfStartReturn) { _cached_encoder_for_RocfStartReturn = function (value: RocfStartReturn, _elGetter: $.ASN1Encoder<RocfStartReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_RocfStartReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfStartReturn(value, elGetter);
}


/* eslint-enable */
