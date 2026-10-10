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
import { EventTypeBCSM, _enum_for_EventTypeBCSM, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-CS2-datatypes/EventTypeBCSM.ta.mjs";
import { ProfileIdentifier, _decode_ProfileIdentifier, _encode_ProfileIdentifier } from "../IN-CS2-datatypes/ProfileIdentifier.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary TriggerDataIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerDataIdentifier{PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *   triggerID          [0]  EventTypeBCSM,
 *   profileIdentifier  [1]  ProfileIdentifier{bound},
 *   extensions
 *     [2]  SEQUENCE SIZE (1..bound.&numOfExtensions) OF
 *            ExtensionField{{SupportedExtensions  {bound}}} OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TriggerDataIdentifier {
    constructor (
        /**
         * @summary `triggerID`.
         * @public
         * @readonly
         */
        readonly triggerID: EventTypeBCSM,
        /**
         * @summary `profileIdentifier`.
         * @public
         * @readonly
         */
        readonly profileIdentifier: ProfileIdentifier,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a TriggerDataIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `TriggerDataIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TriggerDataIdentifier`.
     * @returns {TriggerDataIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (TriggerDataIdentifier)]: (TriggerDataIdentifier)[_K] }): TriggerDataIdentifier {
        return new TriggerDataIdentifier(_o.triggerID, _o.profileIdentifier, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `triggerID`
         * @public
         * @static
         */

    public static _enum_for_triggerID = _enum_for_EventTypeBCSM;
}

/**
 * @summary The Leading Root Component Types of TriggerDataIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TriggerDataIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("triggerID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("profileIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TriggerDataIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TriggerDataIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TriggerDataIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TriggerDataIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TriggerDataIdentifier: $.ASN1Decoder<TriggerDataIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerDataIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerDataIdentifier (el: _Element): TriggerDataIdentifier {
    if (!_cached_decoder_for_TriggerDataIdentifier) { _cached_decoder_for_TriggerDataIdentifier = function (el: _Element): TriggerDataIdentifier {
    let triggerID!: EventTypeBCSM;
    let profileIdentifier!: ProfileIdentifier;
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "triggerID": (_el: _Element): void => { triggerID = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "profileIdentifier": (_el: _Element): void => { profileIdentifier = $._decode_explicit<ProfileIdentifier>(() => _decode_ProfileIdentifier)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TriggerDataIdentifier,
        _extension_additions_list_spec_for_TriggerDataIdentifier,
        _root_component_type_list_2_spec_for_TriggerDataIdentifier,
        undefined,
    );
    return new TriggerDataIdentifier(
        triggerID,
        profileIdentifier,
        extensions
    );
}; }
    return _cached_decoder_for_TriggerDataIdentifier(el);
}

let _cached_encoder_for_TriggerDataIdentifier: $.ASN1Encoder<TriggerDataIdentifier> | null = null;

/**
 * @summary Encodes a(n) TriggerDataIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerDataIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerDataIdentifier (value: TriggerDataIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerDataIdentifier) { _cached_encoder_for_TriggerDataIdentifier = function (value: TriggerDataIdentifier): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeBCSM, $.BER)(value.triggerID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ProfileIdentifier, $.BER)(value.profileIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TriggerDataIdentifier(value, elGetter);
}


/* eslint-enable */
