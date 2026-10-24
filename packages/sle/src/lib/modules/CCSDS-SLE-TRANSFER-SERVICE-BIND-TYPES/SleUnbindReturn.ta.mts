/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type SleUnbindReturn_result, _decode_SleUnbindReturn_result, _encode_SleUnbindReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleUnbindReturn-result.ta.mjs";


/**
 * @summary SleUnbindReturn
 * @description
 * 
 * Return from UNBIND. The only permitted result is positive: the responder has
 * released the association and the provider transitions to state 1 (unbound).
 * If the unbind reason is `end`, the provider may delete the service instance
 * and release its resources. Otherwise the initiator may BIND again before the
 * provision period ends.
 * 
 * CCSDS 911.1-B-5, sections 3.3.2.5, 3.3.3, and A2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SleUnbindReturn ::= SEQUENCE
 * { responderCredentials     Credentials
 * , result                  CHOICE
 *    { positive          [0]    NULL
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class SleUnbindReturn {
    /**
     * @summary `responderCredentials`.
     * @description
     * 
     * Performer credentials with which the invoker authenticates this return.
     * Section 3.3.2.3 names the operation parameter performer-credentials. When
     * the return is unauthenticated, the value should be `unused`.
     *
     * CCSDS 911.1-B-5, sections 3.3.2.3 and 3.1.5.6.
     * @public
     * @readonly
     */
    readonly responderCredentials: Credentials;
    /**
     * @summary `result`.
     * @description
     * 
     * Always `positive`: the responder has released the association. The book
     * defines no negative result for this return.
     *
     * CCSDS 911.1-B-5, section 3.3.2.5.
     * @public
     * @readonly
     */
    readonly result: SleUnbindReturn_result;

    constructor (
        responderCredentials: Credentials,
        result: SleUnbindReturn_result
    ) {
        this.responderCredentials = responderCredentials;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a SleUnbindReturn
     * @description
     * 
     * This takes an `object` and converts it to a `SleUnbindReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SleUnbindReturn`.
     * @returns {SleUnbindReturn}
     */
    public static _from_object (_o: { [_K in keyof (SleUnbindReturn)]: (SleUnbindReturn)[_K] }): SleUnbindReturn {
        return new SleUnbindReturn(_o.responderCredentials, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of SleUnbindReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SleUnbindReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("responderCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SleUnbindReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SleUnbindReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SleUnbindReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SleUnbindReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SleUnbindReturn: $.ASN1Decoder<SleUnbindReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SleUnbindReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SleUnbindReturn (el: _Element): SleUnbindReturn {
    if (!_cached_decoder_for_SleUnbindReturn) { _cached_decoder_for_SleUnbindReturn = function (el: _Element): SleUnbindReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SleUnbindReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "responderCredentials";
    sequence[1].name = "result";
    let responderCredentials!: Credentials;
    let result!: SleUnbindReturn_result;
    responderCredentials = _decode_Credentials(sequence[0]);
    result = _decode_SleUnbindReturn_result(sequence[1]);
    return new SleUnbindReturn(
        responderCredentials,
        result,

    );
}; }
    return _cached_decoder_for_SleUnbindReturn(el);
}

let _cached_encoder_for_SleUnbindReturn: $.ASN1Encoder<SleUnbindReturn> | null = null;

/**
 * @summary Encodes a(n) SleUnbindReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SleUnbindReturn, encoded as an ASN.1 Element.
 */
export
function _encode_SleUnbindReturn (value: SleUnbindReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SleUnbindReturn) { _cached_encoder_for_SleUnbindReturn = function (value: SleUnbindReturn, _elGetter: $.ASN1Encoder<SleUnbindReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.responderCredentials, $.BER),
        /* REQUIRED   */ _encode_SleUnbindReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SleUnbindReturn(value, elGetter);
}


/* eslint-enable */
