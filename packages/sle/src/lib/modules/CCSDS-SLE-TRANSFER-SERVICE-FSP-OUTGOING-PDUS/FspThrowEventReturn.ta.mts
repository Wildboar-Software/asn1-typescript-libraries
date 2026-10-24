/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { type IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";
import { type FspThrowEventReturn_result, _decode_FspThrowEventReturn_result, _encode_FspThrowEventReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspThrowEventReturn-result.ta.mjs";


/**
 * @summary FspThrowEventReturn
 * @description
 * 
 * Provider return from FSP-THROW-EVENT. A positive result means the event and
 * its qualifier will be forwarded to Complex Management. A negative result
 * means they will not. The return does not report whether the actions
 * completed; that arrives by FSP-ASYNC-NOTIFY. The provider remains in state 2
 * or state 3.
 * 
 * CCSDS 912.3-B-3, sections 3.11.1.3, 3.11.2.8, and 3.11.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspThrowEventReturn ::= SEQUENCE
 * {  performerCredentials    Credentials
 * ,  invokeId                InvokeId
 * ,  eventInvokeId           IntUnsignedLong
 * ,  result                  CHOICE
 *    {  positiveResult    [0]   NULL
 *    ,  negativeResult    [1]   DiagnosticFspThrowEvent
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class FspThrowEventReturn {
    /**
     * @summary `performerCredentials`.
     * @description
     * Information with which the invoker authenticates this return. When the
     * agreed level is `all`, every FSP invocation and return except
     * FSP-PEER-ABORT is authenticated. When this return is unauthenticated, the
     * value should be `unused`.
     * 
     * CCSDS 912.3-B-3, sections 3.1.5.1, 3.1.5.4, and 3.1.5.5.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * Invoker-chosen integer, returned unchanged, that pairs this return with
     * its invocation. An invoke-ID that still has an outstanding return in the
     * same service instance is rejected with `duplicateInvokeId`.
     * 
     * CCSDS 912.3-B-3, sections 3.1.6.4 and 3.1.6.5.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `eventInvokeId`.
     * @description
     * Event-invocation identification the provider expects on the next
     * FSP-THROW-EVENT. If this invocation is accepted, the value is one greater
     * than the identification in the invocation. If it is rejected, the value
     * is the one the provider expected: 0 for the first throw-event after a
     * successful FSP-BIND, otherwise one greater than the last accepted
     * identification. The user copies this returned value into the next
     * invocation.
     * 
     * CCSDS 912.3-B-3, section 3.11.2.7.
     * @public
     * @readonly
     */
    readonly eventInvokeId: IntUnsignedLong;
    /**
     * @summary `result`.
     * @description
     * Outcome of FSP-THROW-EVENT. `positiveResult` means the event will be
     * forwarded. `negativeResult` means it will not and carries a
     * `DiagnosticFspThrowEvent`.
     * 
     * CCSDS 912.3-B-3, section 3.11.2.8.
     * @public
     * @readonly
     */
    readonly result: FspThrowEventReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        eventInvokeId: IntUnsignedLong,
        result: FspThrowEventReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.eventInvokeId = eventInvokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a FspThrowEventReturn
     * @description
     * 
     * This takes an `object` and converts it to a `FspThrowEventReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspThrowEventReturn`.
     * @returns {FspThrowEventReturn}
     */
    public static _from_object (_o: { [_K in keyof (FspThrowEventReturn)]: (FspThrowEventReturn)[_K] }): FspThrowEventReturn {
        return new FspThrowEventReturn(_o.performerCredentials, _o.invokeId, _o.eventInvokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of FspThrowEventReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspThrowEventReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("eventInvokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspThrowEventReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspThrowEventReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspThrowEventReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspThrowEventReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspThrowEventReturn: $.ASN1Decoder<FspThrowEventReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspThrowEventReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspThrowEventReturn (el: _Element): FspThrowEventReturn {
    if (!_cached_decoder_for_FspThrowEventReturn) { _cached_decoder_for_FspThrowEventReturn = function (el: _Element): FspThrowEventReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("FspThrowEventReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "eventInvokeId";
    sequence[3].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let eventInvokeId!: IntUnsignedLong;
    let result!: FspThrowEventReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    eventInvokeId = _decode_IntUnsignedLong(sequence[2]);
    result = _decode_FspThrowEventReturn_result(sequence[3]);
    return new FspThrowEventReturn(
        performerCredentials,
        invokeId,
        eventInvokeId,
        result,

    );
}; }
    return _cached_decoder_for_FspThrowEventReturn(el);
}

let _cached_encoder_for_FspThrowEventReturn: $.ASN1Encoder<FspThrowEventReturn> | null = null;

/**
 * @summary Encodes a(n) FspThrowEventReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspThrowEventReturn, encoded as an ASN.1 Element.
 */
export
function _encode_FspThrowEventReturn (value: FspThrowEventReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspThrowEventReturn) { _cached_encoder_for_FspThrowEventReturn = function (value: FspThrowEventReturn, _elGetter: $.ASN1Encoder<FspThrowEventReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.eventInvokeId, $.BER),
        /* REQUIRED   */ _encode_FspThrowEventReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspThrowEventReturn(value, elGetter);
}


/* eslint-enable */
