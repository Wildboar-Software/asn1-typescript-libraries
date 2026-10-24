/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { AuthorityIdentifier, _decode_AuthorityIdentifier, _encode_AuthorityIdentifier } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/AuthorityIdentifier.ta.mjs";
import { SleBindReturn_result, _decode_SleBindReturn_result, _encode_SleBindReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/SleBindReturn-result.ta.mjs";


/**
 * @summary SleBindReturn
 * @description
 * 
 * Return from BIND. A positive result establishes the association and moves the
 * provider from state 1 (unbound) to state 2 (ready), with service parameters
 * at the initial values set by service management. A negative result leaves the
 * provider state unchanged and establishes no association.
 * 
 * CCSDS 911.1-B-5, sections 3.2.2.10, 3.2.3, and A2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SleBindReturn ::= SEQUENCE
 * { performerCredentials    Credentials
 * , responderIdentifier     AuthorityIdentifier
 * , result                  CHOICE
 *    { positive          [0]   VersionNumber
 *    , negative          [1]   BindDiagnostic
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class SleBindReturn {
    /**
     * @summary `performerCredentials`.
     * @description
     * 
     * Information with which the invoker authenticates this return. When the
     * return is unauthenticated, the value should be `unused`. An unrecognized
     * initiator-identifier is rejected with `accessDenied` and this parameter
     * set to `unused`, with no authentication attempt.
     *
     * CCSDS 911.1-B-5, sections 3.2.2.3, 3.1.5.6, and 4.1.6.2.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
    /**
     * @summary `responderIdentifier`.
     * @description
     * 
     * Authority on whose behalf the responding application is acting. An
     * unknown value causes the initiator to PEER-ABORT with `accessDenied`. A
     * known value that is not the authorized responder causes PEER-ABORT with
     * `unexpectedResponderId`.
     *
     * CCSDS 911.1-B-5, sections 3.2.2.5, 4.1.6.4, and 4.1.6.5.
     * @public
     * @readonly
     */
    readonly responderIdentifier: AuthorityIdentifier;
    /**
     * @summary `result`.
     * @description
     * 
     * `positive` accepts the invocation and carries the version that governs
     * the association. `negative` rejects it and carries a `BindDiagnostic`.
     *
     * CCSDS 911.1-B-5, sections 3.2.2.10 and 3.2.2.11.
     * @public
     * @readonly
     */
    readonly result: SleBindReturn_result;

    constructor (
        performerCredentials: Credentials,
        responderIdentifier: AuthorityIdentifier,
        result: SleBindReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.responderIdentifier = responderIdentifier;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a SleBindReturn
     * @description
     * 
     * This takes an `object` and converts it to a `SleBindReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SleBindReturn`.
     * @returns {SleBindReturn}
     */
    public static _from_object (_o: { [_K in keyof (SleBindReturn)]: (SleBindReturn)[_K] }): SleBindReturn {
        return new SleBindReturn(_o.performerCredentials, _o.responderIdentifier, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of SleBindReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SleBindReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("responderIdentifier", false, $.hasTag(_TagClass.universal, 26)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SleBindReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SleBindReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SleBindReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SleBindReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SleBindReturn: $.ASN1Decoder<SleBindReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SleBindReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SleBindReturn (el: _Element): SleBindReturn {
    if (!_cached_decoder_for_SleBindReturn) { _cached_decoder_for_SleBindReturn = function (el: _Element): SleBindReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SleBindReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "responderIdentifier";
    sequence[2].name = "result";
    let performerCredentials!: Credentials;
    let responderIdentifier!: AuthorityIdentifier;
    let result!: SleBindReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    responderIdentifier = _decode_AuthorityIdentifier(sequence[1]);
    result = _decode_SleBindReturn_result(sequence[2]);
    return new SleBindReturn(
        performerCredentials,
        responderIdentifier,
        result,

    );
}; }
    return _cached_decoder_for_SleBindReturn(el);
}

let _cached_encoder_for_SleBindReturn: $.ASN1Encoder<SleBindReturn> | null = null;

/**
 * @summary Encodes a(n) SleBindReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SleBindReturn, encoded as an ASN.1 Element.
 */
export
function _encode_SleBindReturn (value: SleBindReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SleBindReturn) { _cached_encoder_for_SleBindReturn = function (value: SleBindReturn, _elGetter: $.ASN1Encoder<SleBindReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_AuthorityIdentifier(value.responderIdentifier, $.BER),
        /* REQUIRED   */ _encode_SleBindReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SleBindReturn(value, elGetter);
}


/* eslint-enable */
