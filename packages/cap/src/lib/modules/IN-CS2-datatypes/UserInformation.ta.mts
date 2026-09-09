/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InfoToSend, _decode_InfoToSend, _encode_InfoToSend } from "../IN-CS2-datatypes/InfoToSend.ta.mjs";
// export { InfoToSend, _decode_InfoToSend, _encode_InfoToSend } from "../IN-CS2-datatypes/InfoToSend.ta.mjs";
import { Constraints, _decode_Constraints, _encode_Constraints } from "../IN-CS2-datatypes/Constraints.ta.mjs";
// export { Constraints, _decode_Constraints, _encode_Constraints } from "../IN-CS2-datatypes/Constraints.ta.mjs";


/**
 * @summary UserInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserInformation{PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *   infoToSend   [0]  InfoToSend{bound},
 *   constraints  [1]  Constraints,
 *   errorInfo    [2]  InfoToSend{bound} OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UserInformation {
    constructor (
        /**
         * @summary `infoToSend`.
         * @public
         * @readonly
         */
        readonly infoToSend: InfoToSend,
        /**
         * @summary `constraints`.
         * @public
         * @readonly
         */
        readonly constraints: Constraints,
        /**
         * @summary `errorInfo`.
         * @public
         * @readonly
         */
        readonly errorInfo: OPTIONAL<InfoToSend>
    ) {}

    /**
     * @summary Restructures an object into a UserInformation
     * @description
     * 
     * This takes an `object` and converts it to a `UserInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserInformation`.
     * @returns {UserInformation}
     */
    public static _from_object (_o: { [_K in keyof (UserInformation)]: (UserInformation)[_K] }): UserInformation {
        return new UserInformation(_o.infoToSend, _o.constraints, _o.errorInfo);
    }


}

/**
 * @summary The Leading Root Component Types of UserInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UserInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("infoToSend", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("constraints", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("errorInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of UserInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UserInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UserInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UserInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UserInformation: $.ASN1Decoder<UserInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserInformation (el: _Element): UserInformation {
    if (!_cached_decoder_for_UserInformation) { _cached_decoder_for_UserInformation = function (el: _Element): UserInformation {
    let infoToSend!: InfoToSend;
    let constraints!: Constraints;
    let errorInfo: OPTIONAL<InfoToSend>;
    const callbacks: $.DecodingMap = {
        "infoToSend": (_el: _Element): void => { infoToSend = $._decode_explicit<InfoToSend>(() => _decode_InfoToSend)(_el); },
        "constraints": (_el: _Element): void => { constraints = $._decode_implicit<Constraints>(() => _decode_Constraints)(_el); },
        "errorInfo": (_el: _Element): void => { errorInfo = $._decode_explicit<InfoToSend>(() => _decode_InfoToSend)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UserInformation,
        _extension_additions_list_spec_for_UserInformation,
        _root_component_type_list_2_spec_for_UserInformation,
        undefined,
    );
    return new UserInformation(
        infoToSend,
        constraints,
        errorInfo
    );
}; }
    return _cached_decoder_for_UserInformation(el);
}

let _cached_encoder_for_UserInformation: $.ASN1Encoder<UserInformation> | null = null;

/**
 * @summary Encodes a(n) UserInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserInformation, encoded as an ASN.1 Element.
 */
export
function _encode_UserInformation (value: UserInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserInformation) { _cached_encoder_for_UserInformation = function (value: UserInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_InfoToSend, $.BER)(value.infoToSend, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Constraints, $.BER)(value.constraints, $.BER),
            /* IF_ABSENT  */ ((value.errorInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_InfoToSend, $.BER)(value.errorInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UserInformation(value, elGetter);
}


/* eslint-enable */
