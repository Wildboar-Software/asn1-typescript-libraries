/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
// export { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
import { MMSDirection, _decode_MMSDirection, _encode_MMSDirection, _enum_for_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
import { MMStatus, _decode_MMStatus, _encode_MMStatus, _enum_for_MMStatus } from "../TS33128Payloads/MMStatus.ta.mjs";
// export { MMStatus, _enum_for_MMStatus, MMStatus_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_retrieved /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieved /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_rejected /* IMPORTED_LONG_ENUMERATION_ITEM */, rejected /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_deferred /* IMPORTED_LONG_ENUMERATION_ITEM */, deferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_unrecognized /* IMPORTED_LONG_ENUMERATION_ITEM */, unrecognized /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_forwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMStatus_unreachable /* IMPORTED_LONG_ENUMERATION_ITEM */, unreachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMStatus, _encode_MMStatus } from "../TS33128Payloads/MMStatus.ta.mjs";


/**
 * @summary MMSNotificationResponse
 * @description
 * 
 * The IRI-POI in the MMS Proxy-Relay shall generate an xIRI containing an
 * MMSNotificationResponse record when the MMS Proxy-Relay receives a
 * m-notifyresp-ind (as defined in OMA-TS-MMS_ENC [39] clause 6.2 table 4) from
 * the MMS client in the target UE for the deferred retrieval case only. The
 * immediate retrieval trigger on m-notifyresp-ind is in clause 7.4.3.7.
 *
 * 3GPP TS 33.128, clause 7.4.3.5.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSNotificationResponse ::= SEQUENCE
 * {
 *     transactionID [1] UTF8String,
 *     version       [2] MMSVersion,
 *     direction     [3] MMSDirection,
 *     status        [4] MMStatus,
 *     reportAllowed [5] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MMSNotificationResponse {
    /**
     * @summary `transactionID`.
     * @description
     *
     * An ID used to correlate an MMS request and response between the target
     * and the MMS Proxy-Relay. As defined in OMA-TS-MMS_ENC [39] clause 7.3.63.
     *
     * 3GPP TS 33.128, clause 7.4.3.5.
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
     * 3GPP TS 33.128, clause 7.4.3.5.
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
     * 3GPP TS 33.128, clause 7.4.3.5.
     *
     * @public
     * @readonly
     */
    readonly direction: MMSDirection;
    /**
     * @summary `status`.
     * @description
     *
     * Provides a MM status. A status of "retrieved" is only signalled by the
     * retrieving UE after retrieval of the MM.
     *
     * 3GPP TS 33.128, clause 7.4.3.5.
     *
     * @public
     * @readonly
     */
    readonly status: MMStatus;
    /**
     * @summary `reportAllowed`.
     * @description
     *
     * Indication whether or not the sending of delivery report is allowed by
     * the recipient MMS Client. The values given in OMA-TS-MMS_ENC [39] clause
     * 7.3.47 shall be encoded as follows: "Yes" = True, "No" = False. Include
     * if sent to the MMS Proxy-Relay.
     *
     * 3GPP TS 33.128, clause 7.4.3.5.
     *
     * @public
     * @readonly
     */
    readonly reportAllowed: OPTIONAL<BOOLEAN>;
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
        status: MMStatus,
        reportAllowed: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.transactionID = transactionID;
        this.version = version;
        this.direction = direction;
        this.status = status;
        this.reportAllowed = reportAllowed;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMSNotificationResponse
     * @description
     * 
     * This takes an `object` and converts it to a `MMSNotificationResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSNotificationResponse`.
     * @returns {MMSNotificationResponse}
     */
    public static _from_object (_o: { [_K in keyof (MMSNotificationResponse)]: (MMSNotificationResponse)[_K] }): MMSNotificationResponse {
        return new MMSNotificationResponse(_o.transactionID, _o.version, _o.direction, _o.status, _o.reportAllowed, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_MMSDirection;        /**
         * @summary The enum used as the type of the component `status`
         * @public
         * @static
         */

    public static _enum_for_status = _enum_for_MMStatus;
}

/**
 * @summary The Leading Root Component Types of MMSNotificationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSNotificationResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("status", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("reportAllowed", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of MMSNotificationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSNotificationResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSNotificationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSNotificationResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSNotificationResponse: $.ASN1Decoder<MMSNotificationResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSNotificationResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSNotificationResponse (el: _Element): MMSNotificationResponse {
    if (!_cached_decoder_for_MMSNotificationResponse) { _cached_decoder_for_MMSNotificationResponse = function (el: _Element): MMSNotificationResponse {
    let transactionID!: UTF8String;
    let version!: MMSVersion;
    let direction!: MMSDirection;
    let status!: MMStatus;
    let reportAllowed: OPTIONAL<BOOLEAN>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "transactionID": (_el: _Element): void => { transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "version": (_el: _Element): void => { version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(_el); },
        "status": (_el: _Element): void => { status = $._decode_implicit<MMStatus>(() => _decode_MMStatus)(_el); },
        "reportAllowed": (_el: _Element): void => { reportAllowed = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSNotificationResponse,
        _extension_additions_list_spec_for_MMSNotificationResponse,
        _root_component_type_list_2_spec_for_MMSNotificationResponse,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MMSNotificationResponse(
        transactionID,
        version,
        direction,
        status,
        reportAllowed,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MMSNotificationResponse(el);
}

let _cached_encoder_for_MMSNotificationResponse: $.ASN1Encoder<MMSNotificationResponse> | null = null;

/**
 * @summary Encodes a(n) MMSNotificationResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSNotificationResponse, encoded as an ASN.1 Element.
 */
export
function _encode_MMSNotificationResponse (value: MMSNotificationResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSNotificationResponse) { _cached_encoder_for_MMSNotificationResponse = function (value: MMSNotificationResponse, elGetter: $.ASN1Encoder<MMSNotificationResponse>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MMSDirection, $.BER)(value.direction, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMStatus, $.BER)(value.status, $.BER);
    if (value.reportAllowed !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.reportAllowed, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSNotificationResponse(value, elGetter);
}


/* eslint-enable */
