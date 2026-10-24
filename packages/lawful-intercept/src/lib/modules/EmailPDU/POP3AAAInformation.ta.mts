/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
    type UTF8String,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AAAResult, _encode_AAAResult, _enum_for_AAAResult, AAAResult } from "../EmailPDU/AAAResult.ta.mjs";
// export { AAAResult, _enum_for_AAAResult, AAAResult_resultUnknown /* IMPORTED_LONG_ENUMERATION_ITEM */, resultUnknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, AAAResult_aAAFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, aAAFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, AAAResult_aAASucceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, aAASucceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AAAResult, _encode_AAAResult } from "../EmailPDU/AAAResult.ta.mjs";


/**
 * @summary POP3AAAInformation
 * @description
 *
 * POP3 authentication reported on an application-layer intercept: username and,
 * optionally, password and result.
 *
 * Clause B.2.1 generates login success or failure from `PASS` or `APOP`. This
 * structure has a password field; the module does not say that an APOP digest
 * is placed there. Annex G.2: the login name identifies the mailbox, but the
 * protocol does not standardise the form. In practice it is often the mailbox
 * name without a domain, or a fully qualified address.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4.3, B.2.1, and G.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * POP3AAAInformation ::= SEQUENCE
 *     -- The POP3AAAInformation field contains the POP3 username & optionally the password
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
class POP3AAAInformation {
    /**
     * @summary `username`.
     * @description
     *
     * POP3 login name, 0 to 64 characters. It identifies the mailbox. There is
     * no standard presentation (annex G.2).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4.3 and G.2.
     *
     * @public
     * @readonly
     */
    readonly username: UTF8String;
    /**
     * @summary `password`.
     * @description
     *
     * POP3 password, 0 to 64 characters, when it is available to report. Clause
     * 6.4.3 includes the password for a clear-text POP3 authentication.
     * Requirement E.1.9 separately requires that a logon-attempt IRI be
     * deliverable without passwords.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4.3 and E.1.9.
     *
     * @public
     * @readonly
     */
    readonly password: OPTIONAL<UTF8String>;
    /**
     * @summary `aAAResult`.
     * @description
     *
     * Result of the POP3 authentication, when reported. The module does not map
     * `AAAResult` values onto `+OK` and `-ERR`; those responses select
     * `e_mail_logon` versus `e_mail_logon_failure` (clause B.2.1).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 6.4.3 and B.2.1.
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
        password?: OPTIONAL<UTF8String>,
        aAAResult?: OPTIONAL<AAAResult>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.username = username;
        this.password = password;
        this.aAAResult = aAAResult;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a POP3AAAInformation
     * @description
     * 
     * This takes an `object` and converts it to a `POP3AAAInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `POP3AAAInformation`.
     * @returns {POP3AAAInformation}
     */
    public static _from_object (_o: { [_K in keyof (POP3AAAInformation)]: (POP3AAAInformation)[_K] }): POP3AAAInformation {
        return new POP3AAAInformation(_o.username, _o.password, _o.aAAResult, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `aAAResult`
         * @public
         * @static
         */

    public static _enum_for_aAAResult = _enum_for_AAAResult;
}

/**
 * @summary The Leading Root Component Types of POP3AAAInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_POP3AAAInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("username", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("password", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aAAResult", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of POP3AAAInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_POP3AAAInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of POP3AAAInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_POP3AAAInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_POP3AAAInformation: $.ASN1Decoder<POP3AAAInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) POP3AAAInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_POP3AAAInformation (el: _Element): POP3AAAInformation {
    if (!_cached_decoder_for_POP3AAAInformation) { _cached_decoder_for_POP3AAAInformation = function (el: _Element): POP3AAAInformation {
    let username!: UTF8String;
    let password: OPTIONAL<UTF8String>;
    let aAAResult: OPTIONAL<AAAResult>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "username": (_el: _Element): void => {
            username = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (username.length > 64) {
                throw new ASN1SizeError("POP3AAAInformation.username violates SIZE constraint");
            }
        },
        "password": (_el: _Element): void => {
            password = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (password.length > 64) {
                throw new ASN1SizeError("POP3AAAInformation.password violates SIZE constraint");
            }
        },
        "aAAResult": (_el: _Element): void => { aAAResult = $._decode_implicit<AAAResult>(() => _decode_AAAResult)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_POP3AAAInformation,
        _extension_additions_list_spec_for_POP3AAAInformation,
        _root_component_type_list_2_spec_for_POP3AAAInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new POP3AAAInformation(
        username,
        password,
        aAAResult,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_POP3AAAInformation(el);
}

let _cached_encoder_for_POP3AAAInformation: $.ASN1Encoder<POP3AAAInformation> | null = null;

/**
 * @summary Encodes a(n) POP3AAAInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The POP3AAAInformation, encoded as an ASN.1 Element.
 */
export
function _encode_POP3AAAInformation (value: POP3AAAInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_POP3AAAInformation) { _cached_encoder_for_POP3AAAInformation = function (value: POP3AAAInformation, elGetter: $.ASN1Encoder<POP3AAAInformation>): _Element {
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
    return _cached_encoder_for_POP3AAAInformation(value, elGetter);
}


/* eslint-enable */
