/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_EncryptionType, _encode_EncryptionType, _enum_for_EncryptionType, EncryptionType } from "../LI-PS-PDU/EncryptionType.ta.mjs";
// export { EncryptionType, _enum_for_EncryptionType, EncryptionType_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptionType_national_option /* IMPORTED_LONG_ENUMERATION_ITEM */, national_option /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptionType_aES_192_CBC /* IMPORTED_LONG_ENUMERATION_ITEM */, aES_192_CBC /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptionType_aES_256_CBC /* IMPORTED_LONG_ENUMERATION_ITEM */, aES_256_CBC /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptionType_blowfish_192_CBC /* IMPORTED_LONG_ENUMERATION_ITEM */, blowfish_192_CBC /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptionType_blowfish_256_CBC /* IMPORTED_LONG_ENUMERATION_ITEM */, blowfish_256_CBC /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptionType_threedes_cbc /* IMPORTED_LONG_ENUMERATION_ITEM */, threedes_cbc /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EncryptionType, _encode_EncryptionType } from "../LI-PS-PDU/EncryptionType.ta.mjs";
import { _decode_EncryptedPayloadType, _encode_EncryptedPayloadType, _enum_for_EncryptedPayloadType, EncryptedPayloadType } from "../LI-PS-PDU/EncryptedPayloadType.ta.mjs";
// export { EncryptedPayloadType, _enum_for_EncryptedPayloadType, EncryptedPayloadType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptedPayloadType_part2 /* IMPORTED_LONG_ENUMERATION_ITEM */, part2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptedPayloadType_part3 /* IMPORTED_LONG_ENUMERATION_ITEM */, part3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptedPayloadType_part4 /* IMPORTED_LONG_ENUMERATION_ITEM */, part4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptedPayloadType_part5 /* IMPORTED_LONG_ENUMERATION_ITEM */, part5 /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptedPayloadType_part6 /* IMPORTED_LONG_ENUMERATION_ITEM */, part6 /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptedPayloadType_part7 /* IMPORTED_LONG_ENUMERATION_ITEM */, part7 /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncryptedPayloadType_part1 /* IMPORTED_LONG_ENUMERATION_ITEM */, part1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EncryptedPayloadType, _encode_EncryptedPayloadType } from "../LI-PS-PDU/EncryptedPayloadType.ta.mjs";


/**
 * @summary EncryptionContainer
 * @description
 * 
 * Transport for one encrypted `Payload`, used when national agreement requires
 * each intercepted PDU to be encrypted. The cipher and the key management are
 * agreed between CSP and LEA. Annex G is normative for the procedure, so that
 * both sides hash and decrypt the same octets.
 *
 * At the CSP the steps are: place the Payload in `EncryptedPayload` and set
 * `byteCounter`; BER-encode that structure and pad with zero octets if the
 * cipher needs padding; build a PS-PDU whose payload is this container, with
 * `encryptionType` equal to `none` and `encryptedPayload` equal to that octet
 * string; DER-encode the PS-PDU; digest that DER encoding (clause 7.2.3);
 * remember the encoded length for the next `byteCounter`; encrypt the
 * `encryptedPayload` octet string; set `encryptionType` to the real cipher;
 * DER-encode the PS-PDU again. The digest from the pre-image becomes the TRI
 * integrity check. DER is required for the digest because BER is not unique.
 * For inter-LEMF handover the resending LEMF performs the CSP role.
 *
 * `encryptedPayloadType` names the service-specific standard inside the
 * encrypted payload so a LEMF can route the PDU without decrypting it. Ciphers
 * that need an IV derive it from the 32-bit unsigned `sequenceNumber` in the PS
 * header, concatenated with itself: four times for a 128-bit IV (both AES-CBC
 * values) and twice for a 64-bit IV (both Blowfish-CBC values, and Triple-DES
 * CBC).
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.6, annex G.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncryptionContainer ::= SEQUENCE
 * {
 *     encryptionType          [0] EncryptionType,
 *     encryptedPayload        [1] OCTET STRING,
 *         -- once decrypted, it can be interpreted as EncryptedPayload
 *     ...,
 *     encryptedPayloadType    [2] EncryptedPayloadType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EncryptionContainer {
    /**
     * @summary `encryptionType`.
     * @description
     *
     * Cipher applied to `encryptedPayload`, or `none` for the clear pre-image
     * that is digested. Annex G sets `none` before the digest and the real
     * cipher after encryption.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly encryptionType: EncryptionType;
    /**
     * @summary `encryptedPayload`.
     * @description
     *
     * The `EncryptedPayload` value. Before encryption it is the BER encoding of
     * that value, padded with zero octets when the cipher needs padding. After
     * step 8 of annex G it is that encoding encrypted. Once decrypted it is
     * decoded as `EncryptedPayload`.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly encryptedPayload: OCTET_STRING;
    /**
     * @summary `encryptedPayloadType`.
     * @description
     *
     * Which part of the TS 102 232 family functionally describes the IRI, CC,
     * or TRI inside the encrypted payload. Set this so the LEMF can route the
     * traffic without decrypting it.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly encryptedPayloadType: OPTIONAL<EncryptedPayloadType>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this version of the module does not name.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 6.2.6, annex G.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        encryptionType: EncryptionType,
        encryptedPayload: OCTET_STRING,
        encryptedPayloadType?: OPTIONAL<EncryptedPayloadType>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.encryptionType = encryptionType;
        this.encryptedPayload = encryptedPayload;
        this.encryptedPayloadType = encryptedPayloadType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EncryptionContainer
     * @description
     * 
     * This takes an `object` and converts it to a `EncryptionContainer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptionContainer`.
     * @returns {EncryptionContainer}
     */
    public static _from_object (_o: { [_K in keyof (EncryptionContainer)]: (EncryptionContainer)[_K] }): EncryptionContainer {
        return new EncryptionContainer(_o.encryptionType, _o.encryptedPayload, _o.encryptedPayloadType, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `encryptionType`
         * @public
         * @static
         */

    public static _enum_for_encryptionType = _enum_for_EncryptionType;        /**
         * @summary The enum used as the type of the component `encryptedPayloadType`
         * @public
         * @static
         */

    public static _enum_for_encryptedPayloadType = _enum_for_EncryptedPayloadType;
}

/**
 * @summary The Leading Root Component Types of EncryptionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EncryptionContainer: $.ComponentSpec[] = [
    new $.ComponentSpec("encryptionType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("encryptedPayload", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EncryptionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EncryptionContainer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EncryptionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EncryptionContainer: $.ComponentSpec[] = [
    new $.ComponentSpec("encryptedPayloadType", true, $.hasTag(_TagClass.context, 2))
];

let _cached_decoder_for_EncryptionContainer: $.ASN1Decoder<EncryptionContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptionContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncryptionContainer (el: _Element): EncryptionContainer {
    if (!_cached_decoder_for_EncryptionContainer) { _cached_decoder_for_EncryptionContainer = function (el: _Element): EncryptionContainer {
    let encryptionType!: EncryptionType;
    let encryptedPayload!: OCTET_STRING;
    let encryptedPayloadType: OPTIONAL<EncryptedPayloadType>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "encryptionType": (_el: _Element): void => { encryptionType = $._decode_implicit<EncryptionType>(() => _decode_EncryptionType)(_el); },
        "encryptedPayload": (_el: _Element): void => { encryptedPayload = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "encryptedPayloadType": (_el: _Element): void => { encryptedPayloadType = $._decode_implicit<EncryptedPayloadType>(() => _decode_EncryptedPayloadType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EncryptionContainer,
        _extension_additions_list_spec_for_EncryptionContainer,
        _root_component_type_list_2_spec_for_EncryptionContainer,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EncryptionContainer(
        encryptionType,
        encryptedPayload,
        encryptedPayloadType,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EncryptionContainer(el);
}

let _cached_encoder_for_EncryptionContainer: $.ASN1Encoder<EncryptionContainer> | null = null;

/**
 * @summary Encodes a(n) EncryptionContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptionContainer, encoded as an ASN.1 Element.
 */
export
function _encode_EncryptionContainer (value: EncryptionContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncryptionContainer) { _cached_encoder_for_EncryptionContainer = function (value: EncryptionContainer, elGetter: $.ASN1Encoder<EncryptionContainer>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EncryptionType, $.BER)(value.encryptionType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.encryptedPayload, $.BER);
    if (value.encryptedPayloadType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_EncryptedPayloadType, $.BER)(value.encryptedPayloadType, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EncryptionContainer(value, elGetter);
}


/* eslint-enable */
