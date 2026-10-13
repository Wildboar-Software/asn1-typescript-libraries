/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { FspNotification, _decode_FspNotification, _encode_FspNotification } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspNotification.ta.mjs";
import { FspPacketLastProcessed, _decode_FspPacketLastProcessed, _encode_FspPacketLastProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketLastProcessed.ta.mjs";
import { FspPacketLastOk, _decode_FspPacketLastOk, _encode_FspPacketLastOk } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspPacketLastOk.ta.mjs";
import { FspProductionStatus, _decode_FspProductionStatus, _encode_FspProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspProductionStatus.ta.mjs";


/**
 * @summary FspAsyncNotifyInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspAsyncNotifyInvocation ::= SEQUENCE
 * {  invokerCredentials         Credentials
 * ,  fspNotification            FspNotification
 * ,  fspPacketLastProc          FspPacketLastProcessed
 * ,  fspPacketLastOk            FspPacketLastOk
 * ,  productionStatus           FspProductionStatus
 * }
 * ```
 * 
 * @class
 */
export
class FspAsyncNotifyInvocation {
    /**
     * @summary `invokerCredentials`.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `fspNotification`.
     * @public
     * @readonly
     */
    readonly fspNotification: FspNotification;
    /**
     * @summary `fspPacketLastProc`.
     * @public
     * @readonly
     */
    readonly fspPacketLastProc: FspPacketLastProcessed;
    /**
     * @summary `fspPacketLastOk`.
     * @public
     * @readonly
     */
    readonly fspPacketLastOk: FspPacketLastOk;
    /**
     * @summary `productionStatus`.
     * @public
     * @readonly
     */
    readonly productionStatus: FspProductionStatus;

    constructor (
        invokerCredentials: Credentials,
        fspNotification: FspNotification,
        fspPacketLastProc: FspPacketLastProcessed,
        fspPacketLastOk: FspPacketLastOk,
        productionStatus: FspProductionStatus
    ) {
        this.invokerCredentials = invokerCredentials;
        this.fspNotification = fspNotification;
        this.fspPacketLastProc = fspPacketLastProc;
        this.fspPacketLastOk = fspPacketLastOk;
        this.productionStatus = productionStatus;
    }

    /**
     * @summary Restructures an object into a FspAsyncNotifyInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `FspAsyncNotifyInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FspAsyncNotifyInvocation`.
     * @returns {FspAsyncNotifyInvocation}
     */
    public static _from_object (_o: { [_K in keyof (FspAsyncNotifyInvocation)]: (FspAsyncNotifyInvocation)[_K] }): FspAsyncNotifyInvocation {
        return new FspAsyncNotifyInvocation(_o.invokerCredentials, _o.fspNotification, _o.fspPacketLastProc, _o.fspPacketLastOk, _o.productionStatus);
    }


}

/**
 * @summary The Leading Root Component Types of FspAsyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FspAsyncNotifyInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("fspNotification", false, $.hasAnyTag),
    new $.ComponentSpec("fspPacketLastProc", false, $.hasAnyTag),
    new $.ComponentSpec("fspPacketLastOk", false, $.hasAnyTag),
    new $.ComponentSpec("productionStatus", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of FspAsyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FspAsyncNotifyInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FspAsyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FspAsyncNotifyInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FspAsyncNotifyInvocation: $.ASN1Decoder<FspAsyncNotifyInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspAsyncNotifyInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspAsyncNotifyInvocation (el: _Element): FspAsyncNotifyInvocation {
    if (!_cached_decoder_for_FspAsyncNotifyInvocation) { _cached_decoder_for_FspAsyncNotifyInvocation = function (el: _Element): FspAsyncNotifyInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("FspAsyncNotifyInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "fspNotification";
    sequence[2].name = "fspPacketLastProc";
    sequence[3].name = "fspPacketLastOk";
    sequence[4].name = "productionStatus";
    let invokerCredentials!: Credentials;
    let fspNotification!: FspNotification;
    let fspPacketLastProc!: FspPacketLastProcessed;
    let fspPacketLastOk!: FspPacketLastOk;
    let productionStatus!: FspProductionStatus;
    invokerCredentials = _decode_Credentials(sequence[0]);
    fspNotification = _decode_FspNotification(sequence[1]);
    fspPacketLastProc = _decode_FspPacketLastProcessed(sequence[2]);
    fspPacketLastOk = _decode_FspPacketLastOk(sequence[3]);
    productionStatus = _decode_FspProductionStatus(sequence[4]);
    return new FspAsyncNotifyInvocation(
        invokerCredentials,
        fspNotification,
        fspPacketLastProc,
        fspPacketLastOk,
        productionStatus,

    );
}; }
    return _cached_decoder_for_FspAsyncNotifyInvocation(el);
}

let _cached_encoder_for_FspAsyncNotifyInvocation: $.ASN1Encoder<FspAsyncNotifyInvocation> | null = null;

/**
 * @summary Encodes a(n) FspAsyncNotifyInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspAsyncNotifyInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_FspAsyncNotifyInvocation (value: FspAsyncNotifyInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspAsyncNotifyInvocation) { _cached_encoder_for_FspAsyncNotifyInvocation = function (value: FspAsyncNotifyInvocation, elGetter: $.ASN1Encoder<FspAsyncNotifyInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_FspNotification(value.fspNotification, $.BER),
        /* REQUIRED   */ _encode_FspPacketLastProcessed(value.fspPacketLastProc, $.BER),
        /* REQUIRED   */ _encode_FspPacketLastOk(value.fspPacketLastOk, $.BER),
        /* REQUIRED   */ _encode_FspProductionStatus(value.productionStatus, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_FspAsyncNotifyInvocation(value, elGetter);
}


/* eslint-enable */
