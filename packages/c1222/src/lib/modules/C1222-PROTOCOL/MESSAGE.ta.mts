/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ASO_qualifier, _decode_ASO_qualifier, _encode_ASO_qualifier } from "../C1222-PROTOCOL/ASO-qualifier.ta.mjs";
// export { ASO_qualifier, _decode_ASO_qualifier, _encode_ASO_qualifier } from "../C1222-PROTOCOL/ASO-qualifier.ta.mjs";
import { Called_AP_title, _decode_Called_AP_title, _encode_Called_AP_title } from "../C1222-PROTOCOL/Called-AP-title.ta.mjs";
// export { Called_AP_title, _decode_Called_AP_title, _encode_Called_AP_title } from "../C1222-PROTOCOL/Called-AP-title.ta.mjs";
import { Called_AP_invocation_id, _decode_Called_AP_invocation_id, _encode_Called_AP_invocation_id } from "../C1222-PROTOCOL/Called-AP-invocation-id.ta.mjs";
// export { Called_AP_invocation_id, _decode_Called_AP_invocation_id, _encode_Called_AP_invocation_id } from "../C1222-PROTOCOL/Called-AP-invocation-id.ta.mjs";
import { Calling_AP_title, _decode_Calling_AP_title, _encode_Calling_AP_title } from "../C1222-PROTOCOL/Calling-AP-title.ta.mjs";
// export { Calling_AP_title, _decode_Calling_AP_title, _encode_Calling_AP_title } from "../C1222-PROTOCOL/Calling-AP-title.ta.mjs";
import { Calling_AE_qualifier, _decode_Calling_AE_qualifier, _encode_Calling_AE_qualifier } from "../C1222-PROTOCOL/Calling-AE-qualifier.ta.mjs";
// export { Calling_AE_qualifier, _decode_Calling_AE_qualifier, _encode_Calling_AE_qualifier } from "../C1222-PROTOCOL/Calling-AE-qualifier.ta.mjs";
import { Calling_AP_invocation_id, _decode_Calling_AP_invocation_id, _encode_Calling_AP_invocation_id } from "../C1222-PROTOCOL/Calling-AP-invocation-id.ta.mjs";
// export { Calling_AP_invocation_id, _decode_Calling_AP_invocation_id, _encode_Calling_AP_invocation_id } from "../C1222-PROTOCOL/Calling-AP-invocation-id.ta.mjs";
import { Mechanism_name, _decode_Mechanism_name, _encode_Mechanism_name } from "../C1222-PROTOCOL/Mechanism-name.ta.mjs";
// export { Mechanism_name, _decode_Mechanism_name, _encode_Mechanism_name } from "../C1222-PROTOCOL/Mechanism-name.ta.mjs";
import { Calling_authentication_value, _decode_Calling_authentication_value, _encode_Calling_authentication_value } from "../C1222-PROTOCOL/Calling-authentication-value.ta.mjs";
// export { Calling_authentication_value, _decode_Calling_authentication_value, _encode_Calling_authentication_value } from "../C1222-PROTOCOL/Calling-authentication-value.ta.mjs";
import { User_information, _decode_User_information, _encode_User_information } from "../C1222-PROTOCOL/User-information.ta.mjs";
// export { User_information, _decode_User_information, _encode_User_information } from "../C1222-PROTOCOL/User-information.ta.mjs";


/**
 * @summary MESSAGE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MESSAGE ::= [APPLICATION 0] IMPLICIT SEQUENCE {
 *     aSO-context                   [1]  ASO-qualifier OPTIONAL,
 *     called-AP-title               [2]  Called-AP-title OPTIONAL,
 *     called-AP-invocation-id       [4]  Called-AP-invocation-id OPTIONAL,
 *     calling-AP-title              [6]  Calling-AP-title OPTIONAL,
 *     calling-AE-qualifier          [7]  Calling-AE-qualifier OPTIONAL,
 *     calling-AP-invocation-id      [8]  Calling-AP-invocation-id,
 *     mechanism-name                [11] IMPLICIT Mechanism-name OPTIONAL,
 *     calling-authentication-value  [12] Calling-authentication-value OPTIONAL,
 *     user-information              [30] User-information
 * }
 * ```
 * 
 * @class
 */
export
class MESSAGE {
    constructor (
        /**
         * @summary `aSO_context`.
         * @public
         * @readonly
         */
        readonly aSO_context: OPTIONAL<ASO_qualifier>,
        /**
         * @summary `called_AP_title`.
         * @public
         * @readonly
         */
        readonly called_AP_title: OPTIONAL<Called_AP_title>,
        /**
         * @summary `called_AP_invocation_id`.
         * @public
         * @readonly
         */
        readonly called_AP_invocation_id: OPTIONAL<Called_AP_invocation_id>,
        /**
         * @summary `calling_AP_title`.
         * @public
         * @readonly
         */
        readonly calling_AP_title: OPTIONAL<Calling_AP_title>,
        /**
         * @summary `calling_AE_qualifier`.
         * @public
         * @readonly
         */
        readonly calling_AE_qualifier: OPTIONAL<Calling_AE_qualifier>,
        /**
         * @summary `calling_AP_invocation_id`.
         * @public
         * @readonly
         */
        readonly calling_AP_invocation_id: Calling_AP_invocation_id,
        /**
         * @summary `mechanism_name`.
         * @public
         * @readonly
         */
        readonly mechanism_name: OPTIONAL<Mechanism_name>,
        /**
         * @summary `calling_authentication_value`.
         * @public
         * @readonly
         */
        readonly calling_authentication_value: OPTIONAL<Calling_authentication_value>,
        /**
         * @summary `user_information`.
         * @public
         * @readonly
         */
        readonly user_information: User_information
    ) {}

    /**
     * @summary Restructures an object into a MESSAGE
     * @description
     * 
     * This takes an `object` and converts it to a `MESSAGE`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MESSAGE`.
     * @returns {MESSAGE}
     */
    public static _from_object (_o: { [_K in keyof (MESSAGE)]: (MESSAGE)[_K] }): MESSAGE {
        return new MESSAGE(_o.aSO_context, _o.called_AP_title, _o.called_AP_invocation_id, _o.calling_AP_title, _o.calling_AE_qualifier, _o.calling_AP_invocation_id, _o.mechanism_name, _o.calling_authentication_value, _o.user_information);
    }


}

/**
 * @summary The Leading Root Component Types of MESSAGE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MESSAGE: $.ComponentSpec[] = [
    new $.ComponentSpec("aSO-context", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("called-AP-title", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("called-AP-invocation-id", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("calling-AP-title", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("calling-AE-qualifier", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("calling-AP-invocation-id", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("mechanism-name", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("calling-authentication-value", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("user-information", false, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of MESSAGE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MESSAGE: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MESSAGE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MESSAGE: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MESSAGE: $.ASN1Decoder<MESSAGE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MESSAGE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MESSAGE (el: _Element): MESSAGE {
    if (!_cached_decoder_for_MESSAGE) { _cached_decoder_for_MESSAGE = $._decode_implicit<MESSAGE>(() => function (el: _Element): MESSAGE {
    let aSO_context: OPTIONAL<ASO_qualifier>;
    let called_AP_title: OPTIONAL<Called_AP_title>;
    let called_AP_invocation_id: OPTIONAL<Called_AP_invocation_id>;
    let calling_AP_title: OPTIONAL<Calling_AP_title>;
    let calling_AE_qualifier: OPTIONAL<Calling_AE_qualifier>;
    let calling_AP_invocation_id!: Calling_AP_invocation_id;
    let mechanism_name: OPTIONAL<Mechanism_name>;
    let calling_authentication_value: OPTIONAL<Calling_authentication_value>;
    let user_information!: User_information;
    const callbacks: $.DecodingMap = {
        "aSO-context": (_el: _Element): void => { aSO_context = $._decode_explicit<ASO_qualifier>(() => _decode_ASO_qualifier)(_el); },
        "called-AP-title": (_el: _Element): void => { called_AP_title = $._decode_explicit<Called_AP_title>(() => _decode_Called_AP_title)(_el); },
        "called-AP-invocation-id": (_el: _Element): void => { called_AP_invocation_id = $._decode_explicit<Called_AP_invocation_id>(() => _decode_Called_AP_invocation_id)(_el); },
        "calling-AP-title": (_el: _Element): void => { calling_AP_title = $._decode_explicit<Calling_AP_title>(() => _decode_Calling_AP_title)(_el); },
        "calling-AE-qualifier": (_el: _Element): void => { calling_AE_qualifier = $._decode_explicit<Calling_AE_qualifier>(() => _decode_Calling_AE_qualifier)(_el); },
        "calling-AP-invocation-id": (_el: _Element): void => { calling_AP_invocation_id = $._decode_explicit<Calling_AP_invocation_id>(() => _decode_Calling_AP_invocation_id)(_el); },
        "mechanism-name": (_el: _Element): void => { mechanism_name = $._decode_implicit<Mechanism_name>(() => _decode_Mechanism_name)(_el); },
        "calling-authentication-value": (_el: _Element): void => { calling_authentication_value = $._decode_explicit<Calling_authentication_value>(() => _decode_Calling_authentication_value)(_el); },
        "user-information": (_el: _Element): void => { user_information = $._decode_explicit<User_information>(() => _decode_User_information)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MESSAGE,
        _extension_additions_list_spec_for_MESSAGE,
        _root_component_type_list_2_spec_for_MESSAGE,
        undefined,
    );
    return new MESSAGE(
        aSO_context,
        called_AP_title,
        called_AP_invocation_id,
        calling_AP_title,
        calling_AE_qualifier,
        calling_AP_invocation_id,
        mechanism_name,
        calling_authentication_value,
        user_information
    );
}); }
    return _cached_decoder_for_MESSAGE(el);
}

let _cached_encoder_for_MESSAGE: $.ASN1Encoder<MESSAGE> | null = null;

/**
 * @summary Encodes a(n) MESSAGE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MESSAGE, encoded as an ASN.1 Element.
 */
export
function _encode_MESSAGE (value: MESSAGE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MESSAGE) { _cached_encoder_for_MESSAGE = $._encode_implicit(_TagClass.application, 0, () => function (value: MESSAGE, elGetter: $.ASN1Encoder<MESSAGE>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.aSO_context === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_ASO_qualifier, $.BER)(value.aSO_context, $.BER)),
            /* IF_ABSENT  */ ((value.called_AP_title === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_Called_AP_title, $.BER)(value.called_AP_title, $.BER)),
            /* IF_ABSENT  */ ((value.called_AP_invocation_id === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_Called_AP_invocation_id, $.BER)(value.called_AP_invocation_id, $.BER)),
            /* IF_ABSENT  */ ((value.calling_AP_title === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_Calling_AP_title, $.BER)(value.calling_AP_title, $.BER)),
            /* IF_ABSENT  */ ((value.calling_AE_qualifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_Calling_AE_qualifier, $.BER)(value.calling_AE_qualifier, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 8, () => _encode_Calling_AP_invocation_id, $.BER)(value.calling_AP_invocation_id, $.BER),
            /* IF_ABSENT  */ ((value.mechanism_name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_Mechanism_name, $.BER)(value.mechanism_name, $.BER)),
            /* IF_ABSENT  */ ((value.calling_authentication_value === undefined) ? undefined : $._encode_explicit(_TagClass.context, 12, () => _encode_Calling_authentication_value, $.BER)(value.calling_authentication_value, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 30, () => _encode_User_information, $.BER)(value.user_information, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_MESSAGE(value, elGetter);
}


/* eslint-enable */
