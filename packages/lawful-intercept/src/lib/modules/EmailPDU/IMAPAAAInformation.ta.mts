/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    UTF8String,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AAAResult, _encode_AAAResult, _enum_for_AAAResult, AAAResult } from "../EmailPDU/AAAResult.ta.mjs";
// export { AAAResult, _enum_for_AAAResult, AAAResult_resultUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, resultUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, AAAResult_aAAFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, aAAFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, AAAResult_aAASucceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, aAASucceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AAAResult, _encode_AAAResult } from "../EmailPDU/AAAResult.ta.mjs";


/**
 * @summary IMAPAAAInformation
 * @description
 *
 * IMAP4 authentication reported on an application-layer intercept: username
 * and, optionally, password and result.
 *
 * Clause 6.4.3 requires username, password, and result when IMAP4 is used with
 * a clear-text username and password (IETF RFC 9051). Table C.1 also maps SASL
 * `AUTHENTICATE` (IETF RFC 4422) to `e_mail_logon`; this structure has no
 * challenge or response field for that exchange.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4.3 and C.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMAPAAAInformation ::= SEQUENCE
 *     -- The iMAPAAAInformation field contains the IMAP username & optionally the password
 * {
 *     username                    [0] UTF8String (SIZE (0..64)),
 *     password                    [1] UTF8String (SIZE (0..64)) OPTIONAL,
 *     aAAResult                   [2] AAAResult OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class IMAPAAAInformation {
    /**
     * @summary `username`.
     * @description
     *
     * IMAP4 login name, 0 to 64 characters.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 6.4.3.
     *
     * @public
     * @readonly
     */
    readonly username: UTF8String;
    /**
     * @summary `password`.
     * @description
     *
     * Clear-text IMAP4 password, 0 to 64 characters, when clause 6.4.3 applies.
     * Omitted when the exchange has no clear-text password.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 6.4.3.
     *
     * @public
     * @readonly
     */
    readonly password: OPTIONAL<UTF8String>;
    /**
     * @summary `aAAResult`.
     * @description
     *
     * Result of the IMAP4 authentication, when reported. Command success for
     * the IRI itself is `E-mail-Status` (table C.2), which this field does not
     * replace.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4.3 and C.2.
     *
     * @public
     * @readonly
     */
    readonly aAAResult: OPTIONAL<AAAResult>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        username: UTF8String,
        password: OPTIONAL<UTF8String>,
        aAAResult: OPTIONAL<AAAResult>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.username = username;
        this.password = password;
        this.aAAResult = aAAResult;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IMAPAAAInformation
     * @description
     * 
     * This takes an `object` and converts it to a `IMAPAAAInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMAPAAAInformation`.
     * @returns {IMAPAAAInformation}
     */
    public static _from_object (_o: { [_K in keyof (IMAPAAAInformation)]: (IMAPAAAInformation)[_K] }): IMAPAAAInformation {
        return new IMAPAAAInformation(_o.username, _o.password, _o.aAAResult, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `aAAResult`
         * @public
         * @static
         */

    public static _enum_for_aAAResult = _enum_for_AAAResult;
}

/**
 * @summary The Leading Root Component Types of IMAPAAAInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMAPAAAInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("username", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("password", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aAAResult", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IMAPAAAInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMAPAAAInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMAPAAAInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMAPAAAInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMAPAAAInformation: $.ASN1Decoder<IMAPAAAInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMAPAAAInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMAPAAAInformation (el: _Element): IMAPAAAInformation {
    if (!_cached_decoder_for_IMAPAAAInformation) { _cached_decoder_for_IMAPAAAInformation = function (el: _Element): IMAPAAAInformation {
    let username!: UTF8String;
    let password: OPTIONAL<UTF8String>;
    let aAAResult: OPTIONAL<AAAResult>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "username": (_el: _Element): void => {
            username = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (username.length > 64) {
                throw new ASN1SizeError("IMAPAAAInformation.username violates SIZE constraint");
            }
        },
        "password": (_el: _Element): void => {
            password = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (password.length > 64) {
                throw new ASN1SizeError("IMAPAAAInformation.password violates SIZE constraint");
            }
        },
        "aAAResult": (_el: _Element): void => { aAAResult = $._decode_implicit<AAAResult>(() => _decode_AAAResult)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMAPAAAInformation,
        _extension_additions_list_spec_for_IMAPAAAInformation,
        _root_component_type_list_2_spec_for_IMAPAAAInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IMAPAAAInformation(
        username,
        password,
        aAAResult,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IMAPAAAInformation(el);
}

let _cached_encoder_for_IMAPAAAInformation: $.ASN1Encoder<IMAPAAAInformation> | null = null;

/**
 * @summary Encodes a(n) IMAPAAAInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMAPAAAInformation, encoded as an ASN.1 Element.
 */
export
function _encode_IMAPAAAInformation (value: IMAPAAAInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMAPAAAInformation) { _cached_encoder_for_IMAPAAAInformation = function (value: IMAPAAAInformation, elGetter: $.ASN1Encoder<IMAPAAAInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.username, $.BER);
    if (value.password !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.password, $.BER);
    }
    if (value.aAAResult !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_AAAResult, $.BER)(value.aAAResult, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IMAPAAAInformation(value, elGetter);
}


/* eslint-enable */
