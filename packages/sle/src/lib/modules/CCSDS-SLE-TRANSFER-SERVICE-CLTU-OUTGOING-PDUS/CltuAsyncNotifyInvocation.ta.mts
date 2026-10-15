/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { CltuNotification, _decode_CltuNotification, _encode_CltuNotification } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuNotification.ta.mjs";
import { CltuLastProcessed, _decode_CltuLastProcessed, _encode_CltuLastProcessed } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuLastProcessed.ta.mjs";
import { CltuLastOk, _decode_CltuLastOk, _encode_CltuLastOk } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuLastOk.ta.mjs";
import { ProductionStatus, _decode_ProductionStatus, _encode_ProductionStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/ProductionStatus.ta.mjs";
import { UplinkStatus, _decode_UplinkStatus, _encode_UplinkStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/UplinkStatus.ta.mjs";


/**
 * @summary CltuAsyncNotifyInvocation
 * @description
 * 
 * Unconfirmed provider notification of an event that affects FCLTU production.
 * Valid in state 2 (ready) and state 3 (active). Delivered asynchronously to
 * the CLTU-TRANSFER-DATA flow. Section 3.7 also lists
 * event-thrown-identification, cltu-status, radiation-start-time, and
 * radiation-stop-time; Annex A carries those inside cltuNotification,
 * cltuLastProcessed, and cltuLastOk. Notifications sldu expired, production
 * interrupted, and production halted stop further radiation, discard buffered
 * CLTUs, and cause later CLTU-TRANSFER-DATA invocations to be rejected. Any
 * other notification leaves production behavior unchanged. The provider state
 * stays unchanged. CCSDS 912.1-B-5, section 3.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuAsyncNotifyInvocation ::= SEQUENCE
 * {  invokerCredentials            Credentials
 * ,  cltuNotification              CltuNotification
 * ,  cltuLastProcessed             CltuLastProcessed
 * ,  cltuLastOk                    CltuLastOk
 * ,  productionStatus              ProductionStatus
 * ,  uplinkStatus                  UplinkStatus
 * }
 * ```
 * 
 * @class
 */
export
class CltuAsyncNotifyInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     *
     * Credentials that let the user authenticate this provider invocation when
     * the agreed authentication level requires it. Set this to unused when
     * authentication is not required. CCSDS 912.1-B-5, section 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `cltuNotification`.
     * @description
     *
     * The event being notified (section 3.7.2.3, notification-type). action
     * list completed, action list not completed, and event condition evaluated
     * to false carry the event-invocation-identification of the
     * CLTU-THROW-EVENT that caused them (section 3.7.2.4). Every other
     * notification omits that identification.
     * @public
     * @readonly
     */
    readonly cltuNotification: CltuNotification;
    /**
     * @summary `cltuLastProcessed`.
     * @description
     *
     * The CLTU the provider most recently attempted to radiate, or
     * noCltuProcessed when none have been attempted in this service instance
     * (section 3.7.2.5). cltu-status and radiation-start-time are present only
     * in the cltuProcessed alternative (sections 3.7.2.7 and 3.7.2.8).
     * @public
     * @readonly
     */
    readonly cltuLastProcessed: CltuLastProcessed;
    /**
     * @summary `cltuLastOk`.
     * @description
     *
     * The CLTU most recently radiated completely, or noCltuOk when none have
     * completed in this service instance (section 3.7.2.6). radiation-stop-time
     * is present only in the cltuOk alternative (section 3.7.2.9).
     * @public
     * @readonly
     */
    readonly cltuLastOk: CltuLastOk;
    /**
     * @summary `productionStatus`.
     * @description
     *
     * Current status of the production process: configured, operational,
     * interrupted, or halted. CCSDS 912.1-B-5, section 3.7.2.10.
     * @public
     * @readonly
     */
    readonly productionStatus: ProductionStatus;
    /**
     * @summary `uplinkStatus`.
     * @description
     *
     * Forward-link state taken from the CLCW in the return telemetry, when that
     * evaluation is configured. CCSDS 912.1-B-5, section 3.7.2.11.
     * @public
     * @readonly
     */
    readonly uplinkStatus: UplinkStatus;

    constructor (
        invokerCredentials: Credentials,
        cltuNotification: CltuNotification,
        cltuLastProcessed: CltuLastProcessed,
        cltuLastOk: CltuLastOk,
        productionStatus: ProductionStatus,
        uplinkStatus: UplinkStatus
    ) {
        this.invokerCredentials = invokerCredentials;
        this.cltuNotification = cltuNotification;
        this.cltuLastProcessed = cltuLastProcessed;
        this.cltuLastOk = cltuLastOk;
        this.productionStatus = productionStatus;
        this.uplinkStatus = uplinkStatus;
    }

    /**
     * @summary Restructures an object into a CltuAsyncNotifyInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `CltuAsyncNotifyInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CltuAsyncNotifyInvocation`.
     * @returns {CltuAsyncNotifyInvocation}
     */
    public static _from_object (_o: { [_K in keyof (CltuAsyncNotifyInvocation)]: (CltuAsyncNotifyInvocation)[_K] }): CltuAsyncNotifyInvocation {
        return new CltuAsyncNotifyInvocation(_o.invokerCredentials, _o.cltuNotification, _o.cltuLastProcessed, _o.cltuLastOk, _o.productionStatus, _o.uplinkStatus);
    }


}

/**
 * @summary The Leading Root Component Types of CltuAsyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CltuAsyncNotifyInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("cltuNotification", false, $.hasAnyTag),
    new $.ComponentSpec("cltuLastProcessed", false, $.hasAnyTag),
    new $.ComponentSpec("cltuLastOk", false, $.hasAnyTag),
    new $.ComponentSpec("productionStatus", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("uplinkStatus", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CltuAsyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CltuAsyncNotifyInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CltuAsyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CltuAsyncNotifyInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CltuAsyncNotifyInvocation: $.ASN1Decoder<CltuAsyncNotifyInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuAsyncNotifyInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuAsyncNotifyInvocation (el: _Element): CltuAsyncNotifyInvocation {
    if (!_cached_decoder_for_CltuAsyncNotifyInvocation) { _cached_decoder_for_CltuAsyncNotifyInvocation = function (el: _Element): CltuAsyncNotifyInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("CltuAsyncNotifyInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "cltuNotification";
    sequence[2].name = "cltuLastProcessed";
    sequence[3].name = "cltuLastOk";
    sequence[4].name = "productionStatus";
    sequence[5].name = "uplinkStatus";
    let invokerCredentials!: Credentials;
    let cltuNotification!: CltuNotification;
    let cltuLastProcessed!: CltuLastProcessed;
    let cltuLastOk!: CltuLastOk;
    let productionStatus!: ProductionStatus;
    let uplinkStatus!: UplinkStatus;
    invokerCredentials = _decode_Credentials(sequence[0]);
    cltuNotification = _decode_CltuNotification(sequence[1]);
    cltuLastProcessed = _decode_CltuLastProcessed(sequence[2]);
    cltuLastOk = _decode_CltuLastOk(sequence[3]);
    productionStatus = _decode_ProductionStatus(sequence[4]);
    uplinkStatus = _decode_UplinkStatus(sequence[5]);
    return new CltuAsyncNotifyInvocation(
        invokerCredentials,
        cltuNotification,
        cltuLastProcessed,
        cltuLastOk,
        productionStatus,
        uplinkStatus,

    );
}; }
    return _cached_decoder_for_CltuAsyncNotifyInvocation(el);
}

let _cached_encoder_for_CltuAsyncNotifyInvocation: $.ASN1Encoder<CltuAsyncNotifyInvocation> | null = null;

/**
 * @summary Encodes a(n) CltuAsyncNotifyInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuAsyncNotifyInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_CltuAsyncNotifyInvocation (value: CltuAsyncNotifyInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuAsyncNotifyInvocation) { _cached_encoder_for_CltuAsyncNotifyInvocation = function (value: CltuAsyncNotifyInvocation, _elGetter: $.ASN1Encoder<CltuAsyncNotifyInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_CltuNotification(value.cltuNotification, $.BER),
        /* REQUIRED   */ _encode_CltuLastProcessed(value.cltuLastProcessed, $.BER),
        /* REQUIRED   */ _encode_CltuLastOk(value.cltuLastOk, $.BER),
        /* REQUIRED   */ _encode_ProductionStatus(value.productionStatus, $.BER),
        /* REQUIRED   */ _encode_UplinkStatus(value.uplinkStatus, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CltuAsyncNotifyInvocation(value, elGetter);
}


/* eslint-enable */
