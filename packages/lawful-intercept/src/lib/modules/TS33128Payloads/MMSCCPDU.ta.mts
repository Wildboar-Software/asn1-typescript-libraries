/* eslint-disable */
import {
    type OCTET_STRING,
    type UTF8String,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
// export { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";


/**
 * @summary MMSCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSCCPDU ::= SEQUENCE
 * {
 *     version    [1] MMSVersion,
 *     transactionID [2] UTF8String,
 *     mMSContent    [3] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class MMSCCPDU {
    /**
     * @summary `version`.
     * @public
     * @readonly
     */
    readonly version: MMSVersion;
    /**
     * @summary `transactionID`.
     * @public
     * @readonly
     */
    readonly transactionID: UTF8String;
    /**
     * @summary `mMSContent`.
     * @public
     * @readonly
     */
    readonly mMSContent: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        version: MMSVersion,
        transactionID: UTF8String,
        mMSContent: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.version = version;
        this.transactionID = transactionID;
        this.mMSContent = mMSContent;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MMSCCPDU
     * @description
     * 
     * This takes an `object` and converts it to a `MMSCCPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSCCPDU`.
     * @returns {MMSCCPDU}
     */
    public static _from_object (_o: { [_K in keyof (MMSCCPDU)]: (MMSCCPDU)[_K] }): MMSCCPDU {
        return new MMSCCPDU(_o.version, _o.transactionID, _o.mMSContent, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MMSCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSCCPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mMSContent", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MMSCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSCCPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSCCPDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSCCPDU: $.ASN1Decoder<MMSCCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSCCPDU (el: _Element): MMSCCPDU {
    if (!_cached_decoder_for_MMSCCPDU) { _cached_decoder_for_MMSCCPDU = function (el: _Element): MMSCCPDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("MMSCCPDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "version";
    sequence[1].name = "transactionID";
    sequence[2].name = "mMSContent";
    let version!: MMSVersion;
    let transactionID!: UTF8String;
    let mMSContent!: OCTET_STRING;
    version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(sequence[0]);
    transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[1]);
    mMSContent = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[2]);
    return new MMSCCPDU(
        version,
        transactionID,
        mMSContent,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_MMSCCPDU(el);
}

let _cached_encoder_for_MMSCCPDU: $.ASN1Encoder<MMSCCPDU> | null = null;

/**
 * @summary Encodes a(n) MMSCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSCCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_MMSCCPDU (value: MMSCCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSCCPDU) { _cached_encoder_for_MMSCCPDU = function (value: MMSCCPDU, elGetter: $.ASN1Encoder<MMSCCPDU>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MMSVersion, $.BER)(value.version, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.mMSContent, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSCCPDU(value, elGetter);
}


/* eslint-enable */
