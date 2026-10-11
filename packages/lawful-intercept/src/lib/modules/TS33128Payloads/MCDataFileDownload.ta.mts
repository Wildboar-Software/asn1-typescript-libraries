/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
// export { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
import { MCServiceGroupID, _decode_MCServiceGroupID, _encode_MCServiceGroupID } from "../TS33128Payloads/MCServiceGroupID.ta.mjs";
// export { MCServiceGroupID, _decode_MCServiceGroupID, _encode_MCServiceGroupID } from "../TS33128Payloads/MCServiceGroupID.ta.mjs";


/**
 * @summary MCDataFileDownload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCDataFileDownload ::= SEQUENCE
 * {
 *     mCServiceID           [1] MCServiceID,
 *     mCServiceGroupID      [2] MCServiceGroupID OPTIONAL,
 *     mCDataFileURL         [3] UTF8String,
 *     hTTPResponseCode      [4] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class MCDataFileDownload {
    /**
     * @summary `mCServiceID`.
     * @public
     * @readonly
     */
    readonly mCServiceID: MCServiceID;
    /**
     * @summary `mCServiceGroupID`.
     * @public
     * @readonly
     */
    readonly mCServiceGroupID: OPTIONAL<MCServiceGroupID>;
    /**
     * @summary `mCDataFileURL`.
     * @public
     * @readonly
     */
    readonly mCDataFileURL: UTF8String;
    /**
     * @summary `hTTPResponseCode`.
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
        mCDataFileURL: UTF8String,
        hTTPResponseCode: UTF8String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCServiceID = mCServiceID;
        this.mCServiceGroupID = mCServiceGroupID;
        this.mCDataFileURL = mCDataFileURL;
        this.hTTPResponseCode = hTTPResponseCode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MCDataFileDownload
     * @description
     * 
     * This takes an `object` and converts it to a `MCDataFileDownload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MCDataFileDownload`.
     * @returns {MCDataFileDownload}
     */
    public static _from_object (_o: { [_K in keyof (MCDataFileDownload)]: (MCDataFileDownload)[_K] }): MCDataFileDownload {
        return new MCDataFileDownload(_o.mCServiceID, _o.mCServiceGroupID, _o.mCDataFileURL, _o.hTTPResponseCode, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MCDataFileDownload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MCDataFileDownload: $.ComponentSpec[] = [
    new $.ComponentSpec("mCServiceID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mCServiceGroupID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mCDataFileURL", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("hTTPResponseCode", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of MCDataFileDownload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MCDataFileDownload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MCDataFileDownload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MCDataFileDownload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MCDataFileDownload: $.ASN1Decoder<MCDataFileDownload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCDataFileDownload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCDataFileDownload (el: _Element): MCDataFileDownload {
    if (!_cached_decoder_for_MCDataFileDownload) { _cached_decoder_for_MCDataFileDownload = function (el: _Element): MCDataFileDownload {
    let mCServiceID!: MCServiceID;
    let mCServiceGroupID: OPTIONAL<MCServiceGroupID>;
    let mCDataFileURL!: UTF8String;
    let hTTPResponseCode!: UTF8String;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mCServiceID": (_el: _Element): void => { mCServiceID = $._decode_implicit<MCServiceID>(() => _decode_MCServiceID)(_el); },
        "mCServiceGroupID": (_el: _Element): void => { mCServiceGroupID = $._decode_implicit<MCServiceGroupID>(() => _decode_MCServiceGroupID)(_el); },
        "mCDataFileURL": (_el: _Element): void => { mCDataFileURL = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "hTTPResponseCode": (_el: _Element): void => { hTTPResponseCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MCDataFileDownload,
        _extension_additions_list_spec_for_MCDataFileDownload,
        _root_component_type_list_2_spec_for_MCDataFileDownload,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MCDataFileDownload(
        mCServiceID,
        mCServiceGroupID,
        mCDataFileURL,
        hTTPResponseCode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MCDataFileDownload(el);
}

let _cached_encoder_for_MCDataFileDownload: $.ASN1Encoder<MCDataFileDownload> | null = null;

/**
 * @summary Encodes a(n) MCDataFileDownload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCDataFileDownload, encoded as an ASN.1 Element.
 */
export
function _encode_MCDataFileDownload (value: MCDataFileDownload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCDataFileDownload) { _cached_encoder_for_MCDataFileDownload = function (value: MCDataFileDownload, _elGetter: $.ASN1Encoder<MCDataFileDownload>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MCServiceID, $.BER)(value.mCServiceID, $.BER);
    if (value.mCServiceGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MCServiceGroupID, $.BER)(value.mCServiceGroupID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.mCDataFileURL, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.hTTPResponseCode, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MCDataFileDownload(value, elGetter);
}


/* eslint-enable */
