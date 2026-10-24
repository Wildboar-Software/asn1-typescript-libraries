/* eslint-disable */
import {
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
// export { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
import { MMSDirection, _decode_MMSDirection, _encode_MMSDirection, _enum_for_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
import { MMState, _decode_MMState, _encode_MMState, _enum_for_MMState } from "../TS33128Payloads/MMState.ta.mjs";
// export { MMState, _enum_for_MMState, MMState_draft /* IMPORTED_LONG_ENUMERATION_ITEM */, draft /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_sent /* IMPORTED_LONG_ENUMERATION_ITEM */, sent /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMState_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMState, _encode_MMState } from "../TS33128Payloads/MMState.ta.mjs";
import { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
// export { MMFlags, _decode_MMFlags, _encode_MMFlags } from "../TS33128Payloads/MMFlags.ta.mjs";
import { MMSStoreStatus, _decode_MMSStoreStatus, _encode_MMSStoreStatus, _enum_for_MMSStoreStatus } from "../TS33128Payloads/MMSStoreStatus.ta.mjs";
// export { MMSStoreStatus, _enum_for_MMSStoreStatus, MMSStoreStatus_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorTransientFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorTransientNetworkProblem /* IMPORTED_LONG_ENUMERATION_ITEM */, errorTransientNetworkProblem /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentServiceDenied /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentServiceDenied /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentMessageFormatCorrupt /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageFormatCorrupt /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorPermanentMessageNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, errorPermanentMessageNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSStoreStatus_errorMMBoxFull /* IMPORTED_LONG_ENUMERATION_ITEM */, errorMMBoxFull /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSStoreStatus, _encode_MMSStoreStatus } from "../TS33128Payloads/MMSStoreStatus.ta.mjs";


/**
 * @summary MMSMBoxStore
 * @description
 * 
 * The IRI-POI in the MMS Proxy-Relay shall generate an xIRI containing an
 * MMSMBoxStore record when the MMS Proxy-Relay sends a m-mbox-store-conf
 * (defined in OMA-TS-MMS_ENC [39] clause 6.8) to the MMS client in the target
 * UE.
 *
 * 3GPP TS 33.128, clause 7.4.3.10.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSMBoxStore ::= SEQUENCE
 * {
 *     transactionID       [1] UTF8String,
 *     version             [2] MMSVersion,
 *     direction           [3] MMSDirection,
 *     contentLocationReq  [4] UTF8String,
 *     state               [5] MMState OPTIONAL,
 *     flags               [6] MMFlags OPTIONAL,
 *     contentLocationConf [7] UTF8String OPTIONAL,
 *     storeStatus         [8] MMSStoreStatus,
 *     storeStatusText     [9] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSMBoxStore {
    /**
     * @summary `transactionID`.
     * @description
     *
     * An ID used to correlate an MMS request and response between the target
     * and the MMS Proxy-Relay. As defined in OMA-TS-MMS_ENC [39] clause 7.3.63.
     *
     * 3GPP TS 33.128, clause 7.4.3.10.
     *
     * @public
     * @readonly
     */
    readonly transactionID: UTF8String;
    /**
     * @summary `version`.
     * @description
     *
     * The version of MM, to include major and minor version.
     *
     * 3GPP TS 33.128, clause 7.4.3.10.
     *
     * @public
     * @readonly
     */
    readonly version: MMSVersion;
    /**
     * @summary `direction`.
     * @description
     *
     * Indicates the direction of the MM. This shall be encoded as "to target".
     *
     * 3GPP TS 33.128, clause 7.4.3.10.
     *
     * @public
     * @readonly
     */
    readonly direction: MMSDirection;
    /**
     * @summary `contentLocationReq`.
     * @description
     *
     * The content-location-value field defines the URL for the MMS server
     * location of the MM as it appears in the m-mbox-store-req. As defined in
     * OMA-TS-MMS_ENC [39] clause 7.3.10. Include if sent by the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.10.
     *
     * @public
     * @readonly
     */
    readonly contentLocationReq: UTF8String;
    /**
     * @summary `state`.
     * @description
     *
     * Identifies the value of the MM State associated with a MM to be stored or
     * stored MM. Sets the state for the forwarded MM when it is stored. As
     * defined in OMA-TS-MMS_ENC [39] clause 7.3.33. Include if sent by the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.10.
     *
     * @public
     * @readonly
     */
    readonly state: OPTIONAL<MMState>;
    /**
     * @summary `flags`.
     * @description
     *
     * Identifies a keyword to add or remove from the list of keywords
     * associated with a stored MM. See OMA-TS-MMS_ENC [39] clause 7.3.32.
     * Include if sent by the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.10.
     *
     * @public
     * @readonly
     */
    readonly flags: OPTIONAL<MMFlags>;
    /**
     * @summary `contentLocationConf`.
     * @description
     *
     * The content-location-value field defines the URL for the MMS server
     * location of the MM as it appears in the m-mbox-store-conf. As defined in
     * OMA-TS-MMS_ENC [39] clause 7.3.10. Include if sent by the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.10.
     *
     * @public
     * @readonly
     */
    readonly contentLocationConf: OPTIONAL<UTF8String>;
    /**
     * @summary `storeStatus`.
     * @description
     *
     * Indicates if the MM was successfully stored in the MMBox.
     *
     * 3GPP TS 33.128, clause 7.4.3.10.
     *
     * @public
     * @readonly
     */
    readonly storeStatus: MMSStoreStatus;
    /**
     * @summary `storeStatusText`.
     * @description
     *
     * Text that qualifies the Store Status. Include if sent to the target. As
     * defined in OMA-TS-MMS_ENC [39] clause 7.3.59. Include if sent by the MMS
     * Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.10.
     *
     * @public
     * @readonly
     */
    readonly storeStatusText: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        transactionID: UTF8String,
        version: MMSVersion,
        direction: MMSDirection,
        contentLocationReq: UTF8String,
        state: OPTIONAL<MMState>,
        flags: OPTIONAL<MMFlags>,
        contentLocationConf: OPTIONAL<UTF8String>,
        storeStatus: MMSStoreStatus,
        storeStatusText?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.transactionID = transactionID;
        this.version = version;
        this.direction = direction;
        this.contentLocationReq = contentLocationReq;
        this.state = state;
        this.flags = flags;
        this.contentLocationConf = contentLocationConf;
        this.storeStatus = storeStatus;
        this.storeStatusText = storeStatusText;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMSMBoxStore
     * @description
     * 
     * This takes an `object` and converts it to a `MMSMBoxStore`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSMBoxStore`.
     * @returns {MMSMBoxStore}
     */
    public static _from_object (_o: { [_K in keyof (MMSMBoxStore)]: (MMSMBoxStore)[_K] }): MMSMBoxStore {
        return new MMSMBoxStore(_o.transactionID, _o.version, _o.direction, _o.contentLocationReq, _o.state, _o.flags, _o.contentLocationConf, _o.storeStatus, _o.storeStatusText, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_MMSDirection;        /**
         * @summary The enum used as the type of the component `state`
         * @public
         * @static
         */

    public static _enum_for_state = _enum_for_MMState;        /**
         * @summary The enum used as the type of the component `storeStatus`
         * @public
         * @static
         */

    public static _enum_for_storeStatus = _enum_for_MMSStoreStatus;
}

/**
 * @summary The Leading Root Component Types of MMSMBoxStore
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSMBoxStore: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("contentLocationReq", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("state", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("flags", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("contentLocationConf", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("storeStatus", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("storeStatusText", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of MMSMBoxStore
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSMBoxStore: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSMBoxStore
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSMBoxStore: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSMBoxStore: $.ASN1Decoder<MMSMBoxStore> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSMBoxStore
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSMBoxStore (el: _Element): MMSMBoxStore {
    if (!_cached_decoder_for_MMSMBoxStore) { _cached_decoder_for_MMSMBoxStore = function (el: _Element): MMSMBoxStore {
    let transactionID!: UTF8String;
    let version!: MMSVersion;
    let direction!: MMSDirection;
    let contentLocationReq!: UTF8String;
    let state: OPTIONAL<MMState>;
    let flags: OPTIONAL<MMFlags>;
    let contentLocationConf: OPTIONAL<UTF8String>;
    let storeStatus!: MMSStoreStatus;
    let storeStatusText: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(_el); },
        "contentLocationReq": (_el: _Element): void => { contentLocationReq = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "state": (_el: _Element): void => { state = $._decode_implicit<MMState>(() => _decode_MMState)(_el); },
        "flags": (_el: _Element): void => { flags = $._decode_implicit<MMFlags>(() => _decode_MMFlags)(_el); },
        "contentLocationConf": (_el: _Element): void => { contentLocationConf = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "storeStatus": (_el: _Element): void => { storeStatus = $._decode_implicit<MMSStoreStatus>(() => _decode_MMSStoreStatus)(_el); },
        "storeStatusText": (_el: _Element): void => { storeStatusText = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSMBoxStore,
        _extension_additions_list_spec_for_MMSMBoxStore,
        _root_component_type_list_2_spec_for_MMSMBoxStore,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MMSMBoxStore(
        transactionID,
        version,
        direction,
        contentLocationReq,
        state,
        flags,
        contentLocationConf,
        storeStatus,
        storeStatusText,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MMSMBoxStore(el);
}

let _cached_encoder_for_MMSMBoxStore: $.ASN1Encoder<MMSMBoxStore> | null = null;

/**
 * @summary Encodes a(n) MMSMBoxStore into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSMBoxStore, encoded as an ASN.1 Element.
 */
export
function _encode_MMSMBoxStore (value: MMSMBoxStore, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSMBoxStore) { _cached_encoder_for_MMSMBoxStore = function (value: MMSMBoxStore, elGetter: $.ASN1Encoder<MMSMBoxStore>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MMSDirection, $.BER)(value.direction, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.contentLocationReq, $.BER);
    if (value.state !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_MMState, $.BER)(value.state, $.BER);
    }
    if (value.flags !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_MMFlags, $.BER)(value.flags, $.BER);
    }
    if (value.contentLocationConf !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.contentLocationConf, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_MMSStoreStatus, $.BER)(value.storeStatus, $.BER);
    if (value.storeStatusText !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.storeStatusText, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSMBoxStore(value, elGetter);
}


/* eslint-enable */
