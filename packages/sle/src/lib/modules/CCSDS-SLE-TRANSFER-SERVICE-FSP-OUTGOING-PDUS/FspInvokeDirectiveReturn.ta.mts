/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";
import { FspInvokeDirectiveReturn_result, _decode_FspInvokeDirectiveReturn_result, _encode_FspInvokeDirectiveReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-OUTGOING-PDUS/FspInvokeDirectiveReturn-result.ta.mjs";


/**
 * @summary FspInvokeDirectiveReturn
 * @description
 * 
 * Provider return from FSP-INVOKE-DIRECTIVE. A positive result means the
 * directive will be passed to the relevant protocol entity. A negative result
 * means it will not. Completion of an accepted directive is reported later by
 * FSP-ASYNC-NOTIFY. The provider remains in state 3 (active).
 * 
 * CCSDS 912.3-B-3, sections 3.12.2.7 and 3.12.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspInvokeDirectiveReturn ::= SEQUENCE
 * {  performerCredentials       Credentials
 * ,  invokeId                   InvokeId
 * ,  directiveIdentification    IntUnsignedLong
 * ,  result                     CHOICE
 *    {  positiveResult       [0]   NULL
 *    ,  negativeResult       [1]   DiagnosticFspInvokeDirective
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class FspInvokeDirectiveReturn {
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
     * @summary `directiveIdentification`.
     * @description
     * Directive identification the provider expects on the next
     * FSP-INVOKE-DIRECTIVE. If this invocation is accepted, the value is one
     * greater than the identification in the invocation. If it is rejected, the
     * value is the one the provider expected: 0 for the first directive after a
     * successful FSP-BIND, otherwise one greater than the last accepted
     * identification. The user copies this returned value into the next
     * invocation.
     * 
     * CCSDS 912.3-B-3, section 3.12.2.5.
     * @public
     * @readonly
     */
    readonly directiveIdentification: IntUnsignedLong;
    /**
     * @summary `result`.
     * @description
     * Outcome of FSP-INVOKE-DIRECTIVE. `positiveResult` means the directive
     * will be implemented. `negativeResult` carries a
     * `DiagnosticFspInvokeDirective`.
     * 
     * CCSDS 912.3-B-3, section 3.12.2.7.
     * @public
     * @readonly
     */
    readonly result: FspInvokeDirectiveReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        directiveIdentification: IntUnsignedLong,
        result: FspInvokeDirectiveReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.directiveIdentification = directiveIdentification;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a FspInvokeDirectiveReturn
     * @description
     * 
     * This takes an `object` and converts it to a `FspInvokeDirectiveReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspInvokeDirectiveReturn`.
     * @returns {FspInvokeDirectiveReturn}
     */
    public static _from_object (_o: { [_K in keyof (FspInvokeDirectiveReturn)]: (FspInvokeDirectiveReturn)[_K] }): FspInvokeDirectiveReturn {
        return new FspInvokeDirectiveReturn(_o.performerCredentials, _o.invokeId, _o.directiveIdentification, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of FspInvokeDirectiveReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspInvokeDirectiveReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("directiveIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspInvokeDirectiveReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspInvokeDirectiveReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspInvokeDirectiveReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspInvokeDirectiveReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspInvokeDirectiveReturn: $.ASN1Decoder<FspInvokeDirectiveReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspInvokeDirectiveReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspInvokeDirectiveReturn (el: _Element): FspInvokeDirectiveReturn {
    if (!_cached_decoder_for_FspInvokeDirectiveReturn) { _cached_decoder_for_FspInvokeDirectiveReturn = function (el: _Element): FspInvokeDirectiveReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("FspInvokeDirectiveReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "directiveIdentification";
    sequence[3].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let directiveIdentification!: IntUnsignedLong;
    let result!: FspInvokeDirectiveReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    directiveIdentification = _decode_IntUnsignedLong(sequence[2]);
    result = _decode_FspInvokeDirectiveReturn_result(sequence[3]);
    return new FspInvokeDirectiveReturn(
        performerCredentials,
        invokeId,
        directiveIdentification,
        result,

    );
}; }
    return _cached_decoder_for_FspInvokeDirectiveReturn(el);
}

let _cached_encoder_for_FspInvokeDirectiveReturn: $.ASN1Encoder<FspInvokeDirectiveReturn> | null = null;

/**
 * @summary Encodes a(n) FspInvokeDirectiveReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspInvokeDirectiveReturn, encoded as an ASN.1 Element.
 */
export
function _encode_FspInvokeDirectiveReturn (value: FspInvokeDirectiveReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspInvokeDirectiveReturn) { _cached_encoder_for_FspInvokeDirectiveReturn = function (value: FspInvokeDirectiveReturn, _elGetter: $.ASN1Encoder<FspInvokeDirectiveReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.directiveIdentification, $.BER),
        /* REQUIRED   */ _encode_FspInvokeDirectiveReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspInvokeDirectiveReturn(value, elGetter);
}


/* eslint-enable */
