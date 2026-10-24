/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CCKeyInfo
 * @description
 * 
 * One decryption key for an SRTP stream of an IMS session. Several streams
 * (audio, video, and others) may each have their own key and salt. Sent in the
 * media-decryption IRI after the MF has collected tickets and obtained keys
 * from the KMS (clause 7.5.1, table 7.4). How those keys are protected on HI2
 * is for further study (clause 7.5.0). 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCKeyInfo ::= SEQUENCE
 * {
 *     cCCSID     [1]    OCTET STRING,
 *         -- the parameter uniquely mapping the key to the encrypted stream.
 *     cCDecKey [2]    OCTET STRING,
 *     cCSalt   [3]    OCTET STRING OPTIONAL,
 *         -- The field reports the value from the CS_ID field in the ticket exchange headers as
 *         -- defined in IETF RFC 6043 [61].
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class CCKeyInfo {
    /**
     * @summary `cCCSID`.
     * @description
     * 
     * Maps this key to the SRTP streams the LEMF must decrypt. Several streams
     * of one session may use different keys. When available, the value is the
     * CS_ID from the ticket-exchange headers in IETF RFC 6043 (table 7.4).
     * Conditional if available.
     * 
     * @public
     * @readonly
     */
    readonly cCCSID: OCTET_STRING;
    /**
     * @summary `cCDecKey`.
     * @description
     * 
     * Decryption key for both media directions. Conditional if available (table
     * 7.4).
     * 
     * @public
     * @readonly
     */
    readonly cCDecKey: OCTET_STRING;
    /**
     * @summary `cCSalt`.
     * @description
     * 
     * Salt that belongs with the decryption key. Conditional if available
     * (table 7.4). The module comment also says this field reports the CS_ID
     * from the RFC 6043 ticket-exchange headers; table 7.4 assigns that CS_ID
     * role to the stream identifier.
     * 
     * @public
     * @readonly
     */
    readonly cCSalt: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of the specification does not
     * define. Annex D requires the LEMF to ignore an unrecognized parameter and
     * continue with the record.
     * 
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cCCSID: OCTET_STRING,
        cCDecKey: OCTET_STRING,
        cCSalt?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.cCCSID = cCCSID;
        this.cCDecKey = cCDecKey;
        this.cCSalt = cCSalt;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CCKeyInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CCKeyInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCKeyInfo`.
     * @returns {CCKeyInfo}
     */
    public static _from_object (_o: { [_K in keyof (CCKeyInfo)]: (CCKeyInfo)[_K] }): CCKeyInfo {
        return new CCKeyInfo(_o.cCCSID, _o.cCDecKey, _o.cCSalt, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CCKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("cCCSID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cCDecKey", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cCSalt", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of CCKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCKeyInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCKeyInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCKeyInfo: $.ASN1Decoder<CCKeyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCKeyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCKeyInfo (el: _Element): CCKeyInfo {
    if (!_cached_decoder_for_CCKeyInfo) { _cached_decoder_for_CCKeyInfo = function (el: _Element): CCKeyInfo {
    let cCCSID!: OCTET_STRING;
    let cCDecKey!: OCTET_STRING;
    let cCSalt: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cCCSID": (_el: _Element): void => { cCCSID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cCDecKey": (_el: _Element): void => { cCDecKey = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cCSalt": (_el: _Element): void => { cCSalt = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CCKeyInfo,
        _extension_additions_list_spec_for_CCKeyInfo,
        _root_component_type_list_2_spec_for_CCKeyInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CCKeyInfo(
        cCCSID,
        cCDecKey,
        cCSalt,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CCKeyInfo(el);
}

let _cached_encoder_for_CCKeyInfo: $.ASN1Encoder<CCKeyInfo> | null = null;

/**
 * @summary Encodes a(n) CCKeyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCKeyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CCKeyInfo (value: CCKeyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCKeyInfo) { _cached_encoder_for_CCKeyInfo = function (value: CCKeyInfo, elGetter: $.ASN1Encoder<CCKeyInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.cCCSID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.cCDecKey, $.BER);
    if (value.cCSalt !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.cCSalt, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CCKeyInfo(value, elGetter);
}


/* eslint-enable */
