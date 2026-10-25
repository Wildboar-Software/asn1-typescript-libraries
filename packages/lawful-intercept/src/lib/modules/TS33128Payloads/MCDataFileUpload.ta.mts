/* eslint-disable */
import {
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
// export { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
import { type MCServiceGroupID, _decode_MCServiceGroupID, _encode_MCServiceGroupID } from "../TS33128Payloads/MCServiceGroupID.ta.mjs";
// export { MCServiceGroupID, _decode_MCServiceGroupID, _encode_MCServiceGroupID } from "../TS33128Payloads/MCServiceGroupID.ta.mjs";
import { MCDataRequestType, _decode_MCDataRequestType, _encode_MCDataRequestType, _enum_for_MCDataRequestType } from "../TS33128Payloads/MCDataRequestType.ta.mjs";
// export { MCDataRequestType, _enum_for_MCDataRequestType, MCDataRequestType_oneToOneFD /* IMPORTED_LONG_ENUMERATION_ITEM */, oneToOneFD /* IMPORTED_SHORT_ENUMERATION_ITEM */, MCDataRequestType_groupFD /* IMPORTED_LONG_ENUMERATION_ITEM */, groupFD /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MCDataRequestType, _encode_MCDataRequestType } from "../TS33128Payloads/MCDataRequestType.ta.mjs";


/**
 * @summary MCDataFileUpload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCDataFileUpload ::= SEQUENCE
 * {
 *     mCServiceID        [1] MCServiceID,
 *     mCServiceGroupID   [2] MCServiceGroupID OPTIONAL,
 *     mcDataRequestType  [3] MCDataRequestType,
 *     mCDataFileURL      [4] UTF8String OPTIONAL,
 *     hTTPResponseCode   [5] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class MCDataFileUpload {
    /**
     * @summary `mCServiceID`.
     * @description
     *
     * MC service ID of the target MC service user uploading a file or MC
     * service user uploading a file intended for a target MC service group.
     * Represented by the mcdata-calling-user-id element of the
     * application/vnd.3gpp.mcdata-info+xml MIME body.
     *
     * 3GPP TS 33.128, clause 7.20.2.6.2.
     *
     * @public
     * @readonly
     */
    readonly mCServiceID: MCServiceID;
    /**
     * @summary `mCServiceGroupID`.
     * @description
     *
     * MC service group ID of the target MC service group the file is intended
     * for. Represented by the mcdata-request-uri element of the
     * application/vnd.3gpp.mcdata-info+xml MIME body.
     *
     * 3GPP TS 33.128, clause 7.20.2.6.2.
     *
     * @public
     * @readonly
     */
    readonly mCServiceGroupID: OPTIONAL<MCServiceGroupID>;
    /**
     * @summary `mcDataRequestType`.
     * @description
     *
     * Request-type element of application/vnd.3gpp.mcdata-info+xml MIME body:
     * "one-to-one-fd" or "group-fd".
     *
     * 3GPP TS 33.128, clause 7.20.2.6.2.
     *
     * @public
     * @readonly
     */
    readonly mcDataRequestType: MCDataRequestType;
    /**
     * @summary `mCDataFileURL`.
     * @description
     *
     * URI of the file being uploaded as found in the location header of the 201
     * Created response.
     *
     * 3GPP TS 33.128, clause 7.20.2.6.2.
     *
     * @public
     * @readonly
     */
    readonly mCDataFileURL: OPTIONAL<UTF8String>;
    /**
     * @summary `hTTPResponseCode`.
     * @description
     *
     * HTTP response code in the HTTP response to the HTTP POST request for file
     * upload.
     *
     * 3GPP TS 33.128, clause 7.20.2.6.2.
     *
     * @public
     * @readonly
     */
    readonly hTTPResponseCode: UTF8String;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCServiceID: MCServiceID,
        mCServiceGroupID: OPTIONAL<MCServiceGroupID>,
        mcDataRequestType: MCDataRequestType,
        mCDataFileURL: OPTIONAL<UTF8String>,
        hTTPResponseCode: UTF8String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCServiceID = mCServiceID;
        this.mCServiceGroupID = mCServiceGroupID;
        this.mcDataRequestType = mcDataRequestType;
        this.mCDataFileURL = mCDataFileURL;
        this.hTTPResponseCode = hTTPResponseCode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCDataFileUpload
     * @description
     * 
     * This takes an `object` and converts it to a `MCDataFileUpload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCDataFileUpload`.
     * @returns {MCDataFileUpload}
     */
    public static _from_object (_o: { [_K in keyof (MCDataFileUpload)]: (MCDataFileUpload)[_K] }): MCDataFileUpload {
        return new MCDataFileUpload(_o.mCServiceID, _o.mCServiceGroupID, _o.mcDataRequestType, _o.mCDataFileURL, _o.hTTPResponseCode, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `mcDataRequestType`
         * @public
         * @static
         */

    public static _enum_for_mcDataRequestType: typeof _enum_for_MCDataRequestType = _enum_for_MCDataRequestType;
}

/**
 * @summary The Leading Root Component Types of MCDataFileUpload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCDataFileUpload: $.ComponentSpec[] = [
    new $.ComponentSpec("mCServiceID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mCServiceGroupID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mcDataRequestType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mCDataFileURL", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("hTTPResponseCode", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of MCDataFileUpload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCDataFileUpload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCDataFileUpload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCDataFileUpload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCDataFileUpload: $.ASN1Decoder<MCDataFileUpload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCDataFileUpload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCDataFileUpload (el: _Element): MCDataFileUpload {
    if (!_cached_decoder_for_MCDataFileUpload) { _cached_decoder_for_MCDataFileUpload = function (el: _Element): MCDataFileUpload {
    let mCServiceID!: MCServiceID;
    let mCServiceGroupID: OPTIONAL<MCServiceGroupID>;
    let mcDataRequestType!: MCDataRequestType;
    let mCDataFileURL: OPTIONAL<UTF8String>;
    let hTTPResponseCode!: UTF8String;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mCServiceID": (_el: _Element): void => { mCServiceID = $._decode_implicit<MCServiceID>(() => _decode_MCServiceID)(_el); },
        "mCServiceGroupID": (_el: _Element): void => { mCServiceGroupID = $._decode_implicit<MCServiceGroupID>(() => _decode_MCServiceGroupID)(_el); },
        "mcDataRequestType": (_el: _Element): void => { mcDataRequestType = $._decode_implicit<MCDataRequestType>(() => _decode_MCDataRequestType)(_el); },
        "mCDataFileURL": (_el: _Element): void => { mCDataFileURL = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "hTTPResponseCode": (_el: _Element): void => { hTTPResponseCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCDataFileUpload,
        _extension_additions_list_spec_for_MCDataFileUpload,
        _root_component_type_list_2_spec_for_MCDataFileUpload,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCDataFileUpload(
        mCServiceID,
        mCServiceGroupID,
        mcDataRequestType,
        mCDataFileURL,
        hTTPResponseCode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCDataFileUpload(el);
}

let _cached_encoder_for_MCDataFileUpload: $.ASN1Encoder<MCDataFileUpload> | null = null;

/**
 * @summary Encodes a(n) MCDataFileUpload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCDataFileUpload, encoded as an ASN.1 Element.
 */
export
function _encode_MCDataFileUpload (value: MCDataFileUpload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCDataFileUpload) { _cached_encoder_for_MCDataFileUpload = function (value: MCDataFileUpload, elGetter: $.ASN1Encoder<MCDataFileUpload>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MCServiceID, $.BER)(value.mCServiceID, $.BER);
    if (value.mCServiceGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MCServiceGroupID, $.BER)(value.mCServiceGroupID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MCDataRequestType, $.BER)(value.mcDataRequestType, $.BER);
    if (value.mCDataFileURL !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.mCDataFileURL, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.hTTPResponseCode, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCDataFileUpload(value, elGetter);
}


/* eslint-enable */
