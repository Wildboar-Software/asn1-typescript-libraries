/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { EscapeRegisterID, _decode_EscapeRegisterID, _encode_EscapeRegisterID } from "../CSTA-escape-types/EscapeRegisterID.ta.mjs";

import { CSTASecurityData, _decode_CSTASecurityData, _encode_CSTASecurityData } from "../CSTA-security/CSTASecurityData.ta.mjs";

import { CSTAPrivateData, _decode_CSTAPrivateData, _encode_CSTAPrivateData } from "../CSTA-extension-types/CSTAPrivateData.ta.mjs";



/**
 * @summary EscapeArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscapeArgument ::= SEQUENCE 
 * {    escapeRegisterID        EscapeRegisterID            OPTIONAL,
 *     security            CSTASecurityData            OPTIONAL,
 *     privateData            CSTAPrivateData                         }
 * ```
 * 
 * @class
 */
export
class EscapeArgument {
    constructor (
        /**
         * @summary `escapeRegisterID`.
         * @public
         * @readonly
         */
        readonly escapeRegisterID: OPTIONAL<EscapeRegisterID>,
        /**
         * @summary `security`.
         * @public
         * @readonly
         */
        readonly security: OPTIONAL<CSTASecurityData>,
        /**
         * @summary `privateData`.
         * @public
         * @readonly
         */
        readonly privateData: CSTAPrivateData
    ) {}

    /**
     * @summary Restructures an object into a EscapeArgument
     * @description
     * 
     * This takes an `object` and converts it to a `EscapeArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EscapeArgument`.
     * @returns {EscapeArgument}
     */
    public static _from_object (_o: { [_K in keyof (EscapeArgument)]: (EscapeArgument)[_K] }): EscapeArgument {
        return new EscapeArgument(_o.escapeRegisterID, _o.security, _o.privateData);
    }


}

/**
 * @summary The Leading Root Component Types of EscapeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EscapeArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("escapeRegisterID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("security", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("privateData", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of EscapeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EscapeArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EscapeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EscapeArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EscapeArgument: $.ASN1Decoder<EscapeArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeArgument (el: _Element): EscapeArgument {
    if (!_cached_decoder_for_EscapeArgument) { _cached_decoder_for_EscapeArgument = function (el: _Element): EscapeArgument {
    let escapeRegisterID: OPTIONAL<EscapeRegisterID>;
    let security: OPTIONAL<CSTASecurityData>;
    let privateData!: CSTAPrivateData;
    const callbacks: $.DecodingMap = {
        "escapeRegisterID": (_el: _Element): void => { escapeRegisterID = _decode_EscapeRegisterID(_el); },
        "security": (_el: _Element): void => { security = _decode_CSTASecurityData(_el); },
        "privateData": (_el: _Element): void => { privateData = _decode_CSTAPrivateData(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EscapeArgument,
        _extension_additions_list_spec_for_EscapeArgument,
        _root_component_type_list_2_spec_for_EscapeArgument,
        undefined,
    );
    return new EscapeArgument(
        escapeRegisterID,
        security,
        privateData
    );
}; }
    return _cached_decoder_for_EscapeArgument(el);
}

let _cached_encoder_for_EscapeArgument: $.ASN1Encoder<EscapeArgument> | null = null;

/**
 * @summary Encodes a(n) EscapeArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeArgument, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeArgument (value: EscapeArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeArgument) { _cached_encoder_for_EscapeArgument = function (value: EscapeArgument, elGetter: $.ASN1Encoder<EscapeArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.escapeRegisterID === undefined) ? undefined : _encode_EscapeRegisterID(value.escapeRegisterID, $.BER)),
            /* IF_ABSENT  */ ((value.security === undefined) ? undefined : _encode_CSTASecurityData(value.security, $.BER)),
            /* REQUIRED   */ _encode_CSTAPrivateData(value.privateData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EscapeArgument(value, elGetter);
}


/* eslint-enable */
