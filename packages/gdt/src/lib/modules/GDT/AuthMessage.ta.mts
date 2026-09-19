/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthAction, _decode_AuthAction, _encode_AuthAction } from "../GDT/AuthAction.ta.mjs";
// export { AuthAction, AuthAction_aa_auth_request /* IMPORTED_LONG_NAMED_INTEGER */, aa_auth_request /* IMPORTED_SHORT_NAMED_INTEGER */, AuthAction_aa_auth_result /* IMPORTED_LONG_NAMED_INTEGER */, aa_auth_result /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AuthAction, _encode_AuthAction } from "../GDT/AuthAction.ta.mjs";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";
// export { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary AuthMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthMessage ::= SEQUENCE {
 *     auth-action AuthAction,
 *     params      Parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class AuthMessage {
    constructor (
        /**
         * @summary `auth_action`.
         * @public
         * @readonly
         */
        readonly auth_action: AuthAction,
        /**
         * @summary `params`.
         * @public
         * @readonly
         */
        readonly params: OPTIONAL<Parameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AuthMessage
     * @description
     * 
     * This takes an `object` and converts it to a `AuthMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthMessage`.
     * @returns {AuthMessage}
     */
    public static _from_object (_o: { [_K in keyof (AuthMessage)]: (AuthMessage)[_K] }): AuthMessage {
        return new AuthMessage(_o.auth_action, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AuthMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("auth-action", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of AuthMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthMessage: $.ASN1Decoder<AuthMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthMessage (el: _Element): AuthMessage {
    if (!_cached_decoder_for_AuthMessage) { _cached_decoder_for_AuthMessage = function (el: _Element): AuthMessage {
    let auth_action!: AuthAction;
    let params: OPTIONAL<Parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "auth-action": (_el: _Element): void => { auth_action = _decode_AuthAction(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthMessage,
        _extension_additions_list_spec_for_AuthMessage,
        _root_component_type_list_2_spec_for_AuthMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AuthMessage(
        auth_action,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AuthMessage(el);
}

let _cached_encoder_for_AuthMessage: $.ASN1Encoder<AuthMessage> | null = null;

/**
 * @summary Encodes a(n) AuthMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthMessage, encoded as an ASN.1 Element.
 */
export
function _encode_AuthMessage (value: AuthMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthMessage) { _cached_encoder_for_AuthMessage = function (value: AuthMessage, elGetter: $.ASN1Encoder<AuthMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AuthAction(value.auth_action, $.BER),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthMessage(value, elGetter);
}


/* eslint-enable */
