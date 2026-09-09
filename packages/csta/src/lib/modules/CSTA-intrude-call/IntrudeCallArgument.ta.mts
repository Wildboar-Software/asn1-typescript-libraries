/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import {
    ParticipationType,
    _enum_for_ParticipationType,
    ParticipationType_active /* IMPORTED_LONG_ENUMERATION_ITEM */,
    active /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ParticipationType,
    _encode_ParticipationType
} from "../CSTA-device-feature-types/ParticipationType.ta.mjs";

import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary IntrudeCallArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntrudeCallArgument ::= SEQUENCE
 * {     intrude             ConnectionID,
 *     participationType         ParticipationType             DEFAULT active,
 *     userData             UserData                 OPTIONAL,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class IntrudeCallArgument {
    constructor (
        /**
         * @summary `intrude`.
         * @public
         * @readonly
         */
        readonly intrude: ConnectionID,
        /**
         * @summary `participationType`.
         * @public
         * @readonly
         */
        readonly participationType: OPTIONAL<ParticipationType>,
        /**
         * @summary `userData`.
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a IntrudeCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `IntrudeCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IntrudeCallArgument`.
     * @returns {IntrudeCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (IntrudeCallArgument)]: (IntrudeCallArgument)[_K] }): IntrudeCallArgument {
        return new IntrudeCallArgument(_o.intrude, _o.participationType, _o.userData, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `participationType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_participationType () { return ParticipationType_active; }        /**
         * @summary The enum used as the type of the component `participationType`
         * @public
         * @static
         */

    public static _enum_for_participationType = _enum_for_ParticipationType;
}

/**
 * @summary The Leading Root Component Types of IntrudeCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IntrudeCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("intrude", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("participationType", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of IntrudeCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IntrudeCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IntrudeCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IntrudeCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IntrudeCallArgument: $.ASN1Decoder<IntrudeCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntrudeCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntrudeCallArgument (el: _Element): IntrudeCallArgument {
    if (!_cached_decoder_for_IntrudeCallArgument) { _cached_decoder_for_IntrudeCallArgument = function (el: _Element): IntrudeCallArgument {
    let intrude!: ConnectionID;
    let participationType: OPTIONAL<ParticipationType> = IntrudeCallArgument._default_value_for_participationType;
    let userData: OPTIONAL<UserData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "intrude": (_el: _Element): void => { intrude = _decode_ConnectionID(_el); },
        "participationType": (_el: _Element): void => { participationType = _decode_ParticipationType(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IntrudeCallArgument,
        _extension_additions_list_spec_for_IntrudeCallArgument,
        _root_component_type_list_2_spec_for_IntrudeCallArgument,
        undefined,
    );
    return new IntrudeCallArgument(
        intrude,
        participationType,
        userData,
        extensions
    );
}; }
    return _cached_decoder_for_IntrudeCallArgument(el);
}

let _cached_encoder_for_IntrudeCallArgument: $.ASN1Encoder<IntrudeCallArgument> | null = null;

/**
 * @summary Encodes a(n) IntrudeCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntrudeCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_IntrudeCallArgument (value: IntrudeCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntrudeCallArgument) { _cached_encoder_for_IntrudeCallArgument = function (value: IntrudeCallArgument, elGetter: $.ASN1Encoder<IntrudeCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.intrude, $.BER),
            /* IF_DEFAULT */ (value.participationType === undefined || $.deepEq(value.participationType, IntrudeCallArgument._default_value_for_participationType) ? undefined : _encode_ParticipationType(value.participationType, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IntrudeCallArgument(value, elGetter);
}


/* eslint-enable */
