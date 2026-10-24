/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMState, _decode_MMState, _encode_MMState, _enum_for_MMState } from "../MMSChargingDataTypes/MMState.ta.mjs";
import { StoreStatus, _decode_StoreStatus, _encode_StoreStatus } from "../MMSChargingDataTypes/StoreStatus.ta.mjs";


/**
 * @summary MMBoxStorageInformation
 * @description
 *
 * This field includes following storage information elements for the MMBox
 * containing the MM State, MM Flags, Store Status, Store Status Text and
 * Stored Message Reference. MM State; This field contains the state of the
 * MM. MM Flags: This field contains the keyword flags of the MM. Store
 * Status: This field contains an appropriate status value of the stored MM,
 * e.g. stored, error-transient-mailbox-full,… Store Status Text; This field
 * includes a more detailed technical description of the store status at the
 * point in time when the CDR is generated. Stored Message Reference; A
 * reference of the newly stored MM.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.24.
 *
 * MMBox storage parameters for an MM. Present on an O1S-CDR only when the
 * MMS R/S supports MMBox and the originator User Agent requested that the
 * submitted MM be stored. Present on an F-CDR under the same condition for
 * the forwarding User Agent. On a Bx1S-CDR the store-status text is
 * present only when the store status is present. MM flags have no default.
 *
 * 3GPP TS 32.270 V19.0.0 clauses 6.1.1.1, 6.1.3.1, and 6.1.4.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMBoxStorageInformation ::= SET {
 *    mmState                  [0] IMPLICIT MMState,
 *    mmFlag                   [1] IMPLICIT OCTET STRING,
 *    storeStatus              [2] IMPLICIT StoreStatus,
 *    storeStatusText          [3] IMPLICIT OCTET STRING,
 *    storedMessageReference   [4] IMPLICIT OCTET STRING}
 * ```
 * 
 * @class
 */
export
class MMBoxStorageInformation {
    /**
     * @summary `mmState`.
     * @description
     *
     * MM State; This field contains the state of the MM.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.24.
     *
     * @public
     * @readonly
     */
    readonly mmState: MMState;
    /**
     * @summary `mmFlag`.
     * @description
     *
     * MM Flags: This field contains the keyword flags of the MM.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.24.
     *
     * @public
     * @readonly
     */
    readonly mmFlag: OCTET_STRING;
    /**
     * @summary `storeStatus`.
     * @description
     *
     * Status of the request to store the MM, as received in MM1_store.RES.
     * Category OC on the Bx1S-CDR.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
     *
     * @public
     * @readonly
     */
    readonly storeStatus: StoreStatus;
    /**
     * @summary `storeStatusText`.
     * @description
     *
     * Store Status Text; This field includes a more detailed technical
     * description of the store status at the point in time when the CDR is
     * generated.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.24.
     *
     * More detailed description of the store status at the time the CDR is
     * generated. On a Bx1S-CDR it is present only when the store status is
     * present.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
     *
     * @public
     * @readonly
     */
    readonly storeStatusText: OCTET_STRING;
    /**
     * @summary `storedMessageReference`.
     * @description
     *
     * Stored Message Reference; A reference of the newly stored MM.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.24.
     *
     * Reference of the newly stored MM, suitable for a later retrieve or MMBox
     * delete.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.1.
     *
     * @public
     * @readonly
     */
    readonly storedMessageReference: OCTET_STRING;

    constructor (
        mmState: MMState,
        mmFlag: OCTET_STRING,
        storeStatus: StoreStatus,
        storeStatusText: OCTET_STRING,
        storedMessageReference: OCTET_STRING
    ) {
        this.mmState = mmState;
        this.mmFlag = mmFlag;
        this.storeStatus = storeStatus;
        this.storeStatusText = storeStatusText;
        this.storedMessageReference = storedMessageReference;
    }

    /**
     * @summary Restructures an object into a MMBoxStorageInformation
     * @description
     * 
     * This takes an `object` and converts it to a `MMBoxStorageInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMBoxStorageInformation`.
     * @returns {MMBoxStorageInformation}
     */
    public static _from_object (_o: { [_K in keyof (MMBoxStorageInformation)]: (MMBoxStorageInformation)[_K] }): MMBoxStorageInformation {
        return new MMBoxStorageInformation(_o.mmState, _o.mmFlag, _o.storeStatus, _o.storeStatusText, _o.storedMessageReference);
    }

        /**
         * @summary The enum used as the type of the component `mmState`
         * @public
         * @static
         */

    public static _enum_for_mmState = _enum_for_MMState;
}

/**
 * @summary The Leading Root Component Types of MMBoxStorageInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMBoxStorageInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("mmState", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mmFlag", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("storeStatus", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("storeStatusText", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("storedMessageReference", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of MMBoxStorageInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMBoxStorageInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMBoxStorageInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMBoxStorageInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMBoxStorageInformation: $.ASN1Decoder<MMBoxStorageInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMBoxStorageInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMBoxStorageInformation (el: _Element): MMBoxStorageInformation {
    if (!_cached_decoder_for_MMBoxStorageInformation) { _cached_decoder_for_MMBoxStorageInformation = function (el: _Element): MMBoxStorageInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let mmState!: MMState;
    let mmFlag!: OCTET_STRING;
    let storeStatus!: StoreStatus;
    let storeStatusText!: OCTET_STRING;
    let storedMessageReference!: OCTET_STRING;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "mmState": (_el: _Element): void => { mmState = $._decode_implicit<MMState>(() => _decode_MMState)(_el); },
        "mmFlag": (_el: _Element): void => { mmFlag = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "storeStatus": (_el: _Element): void => { storeStatus = $._decode_implicit<StoreStatus>(() => _decode_StoreStatus)(_el); },
        "storeStatusText": (_el: _Element): void => { storeStatusText = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "storedMessageReference": (_el: _Element): void => { storedMessageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MMBoxStorageInformation,
        _extension_additions_list_spec_for_MMBoxStorageInformation,
        _root_component_type_list_2_spec_for_MMBoxStorageInformation,
        undefined,
    );
    return new MMBoxStorageInformation( /* SET_CONSTRUCTOR_CALL */
        mmState,
        mmFlag,
        storeStatus,
        storeStatusText,
        storedMessageReference
    );
}; }
    return _cached_decoder_for_MMBoxStorageInformation(el);
}

let _cached_encoder_for_MMBoxStorageInformation: $.ASN1Encoder<MMBoxStorageInformation> | null = null;

/**
 * @summary Encodes a(n) MMBoxStorageInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMBoxStorageInformation, encoded as an ASN.1 Element.
 */
export
function _encode_MMBoxStorageInformation (value: MMBoxStorageInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMBoxStorageInformation) { _cached_encoder_for_MMBoxStorageInformation = function (value: MMBoxStorageInformation, _elGetter: $.ASN1Encoder<MMBoxStorageInformation>): _Element {
    return $._encodeSet([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MMState, $.BER)(value.mmState, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.mmFlag, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_StoreStatus, $.BER)(value.storeStatus, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.storeStatusText, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.storedMessageReference, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_MMBoxStorageInformation(value, elGetter);
}


/* eslint-enable */
