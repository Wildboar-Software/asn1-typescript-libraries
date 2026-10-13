/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";
// export { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";
import { FspInvokeDirectiveInvocation_directive, _decode_FspInvokeDirectiveInvocation_directive, _encode_FspInvokeDirectiveInvocation_directive } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-INCOMING-PDUS/FspInvokeDirectiveInvocation-directive.ta.mjs";
// export { FspInvokeDirectiveInvocation_directive, _decode_FspInvokeDirectiveInvocation_directive, _encode_FspInvokeDirectiveInvocation_directive } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-INCOMING-PDUS/FspInvokeDirectiveInvocation-directive.ta.mjs";


/**
 * @summary FspInvokeDirectiveInvocation
 * @description
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
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `directiveIdentification`.
     * @public
     * @readonly
     */
    readonly directiveIdentification: IntUnsignedLong;
    /**
     * @summary `directive`.
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
    if (!_cached_encoder_for_FspInvokeDirectiveInvocation) { _cached_encoder_for_FspInvokeDirectiveInvocation = function (value: FspInvokeDirectiveInvocation, elGetter: $.ASN1Encoder<FspInvokeDirectiveInvocation>): _Element {
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
