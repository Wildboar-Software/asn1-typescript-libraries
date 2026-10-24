/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { type PacketIdentification, _decode_PacketIdentification, _encode_PacketIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketIdentification.ta.mjs";


/**
 * @summary FspStartInvocation
 * @description
 * 
 * User invocation of FSP-START. Valid only in state 2 (ready). On a positive
 * return the provider enters state 3 (active) and accepts FSP-TRANSFER-DATA.
 * The return reports the scheduled start and stop of service production. COP-1
 * is set up from the parameters supplied by service management. The user may
 * change those parameters with FSP-INVOKE-DIRECTIVE when that operation is
 * enabled for the instance.
 * 
 * CCSDS 912.3-B-3, sections 3.4.1, 3.4.3, and 2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspStartInvocation ::= SEQUENCE
 * {  invokerCredentials         Credentials
 * ,  invokeId                   InvokeId
 * ,  firstPacketIdentification  PacketIdentification
 * }
 * ```
 * 
 * @class
 */
export
class FspStartInvocation {
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
     * @summary `firstPacketIdentification`.
     * @description
     * Packet identification the provider expects on the first FSP-TRANSFER-DATA
     * after this FSP-START. After an FSP-STOP, Packets already in process may
     * still cause notifications. Later identification values should keep every
     * Packet whose production has not finished uniquely identifiable.
     * 
     * CCSDS 912.3-B-3, section 3.4.2.5.
     * @public
     * @readonly
     */
    readonly firstPacketIdentification: PacketIdentification;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        firstPacketIdentification: PacketIdentification
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.firstPacketIdentification = firstPacketIdentification;
    }

    /**
     * @summary Restructures an object into a FspStartInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `FspStartInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspStartInvocation`.
     * @returns {FspStartInvocation}
     */
    public static _from_object (_o: { [_K in keyof (FspStartInvocation)]: (FspStartInvocation)[_K] }): FspStartInvocation {
        return new FspStartInvocation(_o.invokerCredentials, _o.invokeId, _o.firstPacketIdentification);
    }


}

/**
 * @summary The Leading Root Component Types of FspStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspStartInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("firstPacketIdentification", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspStartInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspStartInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspStartInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspStartInvocation: $.ASN1Decoder<FspStartInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspStartInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspStartInvocation (el: _Element): FspStartInvocation {
    if (!_cached_decoder_for_FspStartInvocation) { _cached_decoder_for_FspStartInvocation = function (el: _Element): FspStartInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("FspStartInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "firstPacketIdentification";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let firstPacketIdentification!: PacketIdentification;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    firstPacketIdentification = _decode_PacketIdentification(sequence[2]);
    return new FspStartInvocation(
        invokerCredentials,
        invokeId,
        firstPacketIdentification,

    );
}; }
    return _cached_decoder_for_FspStartInvocation(el);
}

let _cached_encoder_for_FspStartInvocation: $.ASN1Encoder<FspStartInvocation> | null = null;

/**
 * @summary Encodes a(n) FspStartInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspStartInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_FspStartInvocation (value: FspStartInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspStartInvocation) { _cached_encoder_for_FspStartInvocation = function (value: FspStartInvocation, _elGetter: $.ASN1Encoder<FspStartInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_PacketIdentification(value.firstPacketIdentification, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspStartInvocation(value, elGetter);
}


/* eslint-enable */
