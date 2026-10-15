/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CCKeyInfo
 * @description
 * 
 * One decryption key for an intercepted IMS media stream. A session can carry
 * several, one per stream.
 * 
 * Sent on the media-decryption-key REPORT after the MF has taken MIKEY tickets
 * from SIP and obtained the keys from the KMS. Conditional, and only when the
 * key is available.
 * 
 * 3GPP TS 33.108, clause 7.5.1 and table 7.4.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
     * Maps this key to the encrypted stream. Table 7.4 says it maps the session
     * key to the SRTP streams and, when available, carries the CS_ID from the
     * MIKEY ticket-exchange headers (IETF RFC 6043). Provide it when available.
     * 
     * The annex B.3 comment that cites the RFC 6043 CS_ID is written on the
     * salt, not on this component.
     * 
     * 3GPP TS 33.108, table 7.4 and annex B.3.
     * @public
     * @readonly
     */
    readonly cCCSID: OCTET_STRING;
    /**
     * @summary `cCDecKey`.
     * @description
     * 
     * Decryption key for both media directions. Provide it when available.
     * Annex B.3 does not define the key layout.
     * 
     * 3GPP TS 33.108, table 7.4.
     * @public
     * @readonly
     */
    readonly cCDecKey: OCTET_STRING;
    /**
     * @summary `cCSalt`.
     * @description
     * 
     * Salt for this stream. Table 7.4 says to provide it when available and
     * does not define the contents.
     * 
     * The annex B.3 comment on this component says it reports the CS_ID from
     * the MIKEY ticket-exchange headers (IETF RFC 6043). Table 7.4 places that
     * sentence on the stream identifier instead.
     * 
     * 3GPP TS 33.108, table 7.4 and annex B.3.
     * @public
     * @readonly
     */
    readonly cCSalt: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of annex B.3 does not define. They
     * are retained so a later addition on HI2 is not dropped.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        cCCSID: OCTET_STRING,
        cCDecKey: OCTET_STRING,
        cCSalt: OPTIONAL<OCTET_STRING>,
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
