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
import { type FspInvokeDirectiveInvocation_directive, _decode_FspInvokeDirectiveInvocation_directive, _encode_FspInvokeDirectiveInvocation_directive } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-INCOMING-PDUS/FspInvokeDirectiveInvocation-directive.ta.mjs";


/**
 * @summary FspInvokeDirectiveInvocation
 * @description
 * 
 * User invocation of FSP-INVOKE-DIRECTIVE. Valid only in state 3 (active). For
 * one telecommand VC, at most one FSP service instance is configured to invoke
 * it. On a positive return the provider forwards the TC directive to the FSP
 * production engine and reports completion with FSP-ASYNC-NOTIFY. A negative
 * return does not forward the directive. The provider remains in state 3. TC
 * directives reconfigure the TC protocol entities and are specified in CCSDS
 * 232.1-B-2, which section 3.12.1 cites as reference [5].
 * 
 * CCSDS 912.3-B-3, sections 3.12.1 and 3.12.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspInvokeDirectiveInvocation ::= SEQUENCE
 * {  invokerCredentials                  Credentials
 * ,  invokeId                            InvokeId
 * ,  directiveIdentification             IntUnsignedLong
 * ,  directive                           CHOICE
 *    {  initiateADserviceWithoutCLCW  [0]   NULL
 *    ,  initiateADserviceWithCLCW     [1]   NULL
 *    ,  initiateADserviceWithUnlock   [2]   NULL
 *    ,  initiateADserviceWithSetVR    [3]   INTEGER (0 .. 255)
 *    ,  terminateADservice            [4]   NULL
 *    ,  resumeADservice               [5]   NULL
 *    ,  setVS                         [6]   INTEGER (0 .. 255)
 *    ,  setFOPslidingWindowWidth      [7]   INTEGER (1 .. 255)
 *    ,  setT1Initial                  [8]   IntPosLong  -- in
 *                                                             -- microseconds
 *    ,  setTransmissionLimit          [9]   IntPosShort
 *    ,  setTimeoutType                [10]  INTEGER
 *       {  terminateAD                         (0)
 *       ,  suspendAD                           (1)
 *       }
 *    ,  abortVC                       [11]  NULL
 *    ,  modifyMapMuxControl           [12]  MapMuxControl
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class FspInvokeDirectiveInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * Information with which the performer authenticates this invocation. When
     * the agreed level is `all`, every FSP invocation and return except
     * FSP-PEER-ABORT is authenticated; `bind` authenticates only FSP-BIND;
     * `none` leaves every invocation and return unauthenticated. When this
     * invocation is unauthenticated, the value should be `unused`.
     * 
     * CCSDS 912.3-B-3, sections 3.1.5.1, 3.1.5.4, and 3.1.5.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
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
     * Monotonic sequence number of this directive. The first invocation after
     * the first successful FSP-BIND is 0, and each accepted invocation
     * increments it. The next invocation uses the value the provider returned.
     * The expected value survives release or abort of the association. The
     * provider uses the user-supplied value to reference the directive in later
     * reports.
     * 
     * CCSDS 912.3-B-3, section 3.12.2.5.
     * @public
     * @readonly
     */
    readonly directiveIdentification: IntUnsignedLong;
    /**
     * @summary `directive`.
     * @description
     * Directive code and, where the directive has one, its parameter. The
     * supported directives are Initiate AD Service without a CLCW check, with a
     * CLCW check, with Unlock, and with Set V(R); Terminate AD Service; Resume
     * AD Service; Set V(S) to V*(S); Set FOP sliding-window width; Set T1
     * initial; Set transmission limit; Set timeout type; Abort VC; and modify
     * MAP multiplexing control. An unknown directive or a parameter the
     * provider finds in error is rejected with `directiveError`.
     * 
     * CCSDS 912.3-B-3, sections 3.12.2.6 and 3.12.2.8.
     * @public
     * @readonly
     */
    readonly directive: FspInvokeDirectiveInvocation_directive;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        directiveIdentification: IntUnsignedLong,
        directive: FspInvokeDirectiveInvocation_directive
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.directiveIdentification = directiveIdentification;
        this.directive = directive;
    }

    /**
     * @summary Restructures an object into a FspInvokeDirectiveInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `FspInvokeDirectiveInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspInvokeDirectiveInvocation`.
     * @returns {FspInvokeDirectiveInvocation}
     */
    public static _from_object (_o: { [_K in keyof (FspInvokeDirectiveInvocation)]: (FspInvokeDirectiveInvocation)[_K] }): FspInvokeDirectiveInvocation {
        return new FspInvokeDirectiveInvocation(_o.invokerCredentials, _o.invokeId, _o.directiveIdentification, _o.directive);
    }


}

/**
 * @summary The Leading Root Component Types of FspInvokeDirectiveInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspInvokeDirectiveInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("directiveIdentification", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("directive", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FspInvokeDirectiveInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspInvokeDirectiveInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspInvokeDirectiveInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspInvokeDirectiveInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspInvokeDirectiveInvocation: $.ASN1Decoder<FspInvokeDirectiveInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspInvokeDirectiveInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspInvokeDirectiveInvocation (el: _Element): FspInvokeDirectiveInvocation {
    if (!_cached_decoder_for_FspInvokeDirectiveInvocation) { _cached_decoder_for_FspInvokeDirectiveInvocation = function (el: _Element): FspInvokeDirectiveInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("FspInvokeDirectiveInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "directiveIdentification";
    sequence[3].name = "directive";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let directiveIdentification!: IntUnsignedLong;
    let directive!: FspInvokeDirectiveInvocation_directive;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    directiveIdentification = _decode_IntUnsignedLong(sequence[2]);
    directive = _decode_FspInvokeDirectiveInvocation_directive(sequence[3]);
    return new FspInvokeDirectiveInvocation(
        invokerCredentials,
        invokeId,
        directiveIdentification,
        directive,

    );
}; }
    return _cached_decoder_for_FspInvokeDirectiveInvocation(el);
}

let _cached_encoder_for_FspInvokeDirectiveInvocation: $.ASN1Encoder<FspInvokeDirectiveInvocation> | null = null;

/**
 * @summary Encodes a(n) FspInvokeDirectiveInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspInvokeDirectiveInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_FspInvokeDirectiveInvocation (value: FspInvokeDirectiveInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspInvokeDirectiveInvocation) { _cached_encoder_for_FspInvokeDirectiveInvocation = function (value: FspInvokeDirectiveInvocation, _elGetter: $.ASN1Encoder<FspInvokeDirectiveInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_IntUnsignedLong(value.directiveIdentification, $.BER),
        /* REQUIRED   */ _encode_FspInvokeDirectiveInvocation_directive(value.directive, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspInvokeDirectiveInvocation(value, elGetter);
}


/* eslint-enable */
