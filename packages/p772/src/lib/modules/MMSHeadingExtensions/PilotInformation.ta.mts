/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMHSPrecedence, _decode_MMHSPrecedence, _encode_MMHSPrecedence } from "../MMSHeadingExtensions/MMHSPrecedence.ta.mjs";
// export { MMHSPrecedence, MMHSPrecedence_deferred /* IMPORTED_LONG_NAMED_INTEGER */, deferred /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_routine /* IMPORTED_LONG_NAMED_INTEGER */, routine /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_priority /* IMPORTED_LONG_NAMED_INTEGER */, priority /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_immediate /* IMPORTED_LONG_NAMED_INTEGER */, immediate /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_flash /* IMPORTED_LONG_NAMED_INTEGER */, flash /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_override /* IMPORTED_LONG_NAMED_INTEGER */, override /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_ecp /* IMPORTED_LONG_NAMED_INTEGER */, ecp /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_critic /* IMPORTED_LONG_NAMED_INTEGER */, critic /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_override_2 /* IMPORTED_LONG_NAMED_INTEGER */, override_2 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_MMHSPrecedence, _encode_MMHSPrecedence } from "../MMSHeadingExtensions/MMHSPrecedence.ta.mjs";
import { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";
// export { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary PilotInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PilotInformation ::= SEQUENCE {
 *   pilotPrecedence  [0]  MMHSPrecedence OPTIONAL,
 *   -- Note: Values 0 to 15 are reserved for NATO defined precedence levels.
 *   -- Values 16 to 31 are reserved for national use.
 *   pilotRecipient   [1]  SEQUENCE OF ORDescriptor OPTIONAL,
 *   pilotSecurity    [2]  --Message--SecurityLabel OPTIONAL,
 *   pilotHandling    [3]  SEQUENCE OF MilitaryString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PilotInformation {
    constructor (
        /**
         * @summary `pilotPrecedence`.
         * @public
         * @readonly
         */
        readonly pilotPrecedence: OPTIONAL<MMHSPrecedence>,
        /**
         * @summary `pilotRecipient`.
         * @public
         * @readonly
         */
        readonly pilotRecipient: OPTIONAL<ORDescriptor[]>,
        /**
         * @summary `pilotSecurity`.
         * @public
         * @readonly
         */
        readonly pilotSecurity: OPTIONAL<SecurityLabel>,
        /**
         * @summary `pilotHandling`.
         * @public
         * @readonly
         */
        readonly pilotHandling: OPTIONAL<MilitaryString[]>
    ) {}

    /**
     * @summary Restructures an object into a PilotInformation
     * @description
     * 
     * This takes an `object` and converts it to a `PilotInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PilotInformation`.
     * @returns {PilotInformation}
     */
    public static _from_object (_o: { [_K in keyof (PilotInformation)]: (PilotInformation)[_K] }): PilotInformation {
        return new PilotInformation(_o.pilotPrecedence, _o.pilotRecipient, _o.pilotSecurity, _o.pilotHandling);
    }


}

/**
 * @summary The Leading Root Component Types of PilotInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PilotInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("pilotPrecedence", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pilotRecipient", true, $.hasTag(_TagClass.context, 1)),
    /* FIXME: pilotSecurity COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("pilotHandling", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PilotInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PilotInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PilotInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PilotInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PilotInformation: $.ASN1Decoder<PilotInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PilotInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PilotInformation (el: _Element): PilotInformation {
    if (!_cached_decoder_for_PilotInformation) { _cached_decoder_for_PilotInformation = function (el: _Element): PilotInformation {
    let pilotPrecedence: OPTIONAL<MMHSPrecedence>;
    let pilotRecipient: OPTIONAL<ORDescriptor[]>;
    let pilotSecurity: OPTIONAL<SecurityLabel>;
    let pilotHandling: OPTIONAL<MilitaryString[]>;
    const callbacks: $.DecodingMap = {
        "pilotPrecedence": (_el: _Element): void => { pilotPrecedence = $._decode_implicit<MMHSPrecedence>(() => _decode_MMHSPrecedence)(_el); },
        "pilotRecipient": (_el: _Element): void => { pilotRecipient = $._decode_implicit<ORDescriptor[]>(() => $._decodeSequenceOf<ORDescriptor>(() => _decode_ORDescriptor))(_el); },
        "pilotSecurity": (_el: _Element): void => { pilotSecurity = $._decode_implicit<SecurityLabel>(() => _decode_SecurityLabel)(_el); },
        "pilotHandling": (_el: _Element): void => { pilotHandling = $._decode_implicit<MilitaryString[]>(() => $._decodeSequenceOf<MilitaryString>(() => _decode_MilitaryString))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PilotInformation,
        _extension_additions_list_spec_for_PilotInformation,
        _root_component_type_list_2_spec_for_PilotInformation,
        undefined,
    );
    return new PilotInformation(
        pilotPrecedence,
        pilotRecipient,
        pilotSecurity,
        pilotHandling
    );
}; }
    return _cached_decoder_for_PilotInformation(el);
}

let _cached_encoder_for_PilotInformation: $.ASN1Encoder<PilotInformation> | null = null;

/**
 * @summary Encodes a(n) PilotInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PilotInformation, encoded as an ASN.1 Element.
 */
export
function _encode_PilotInformation (value: PilotInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PilotInformation) { _cached_encoder_for_PilotInformation = function (value: PilotInformation, elGetter: $.ASN1Encoder<PilotInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.pilotPrecedence === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MMHSPrecedence, $.BER)(value.pilotPrecedence, $.BER)),
            /* IF_ABSENT  */ ((value.pilotRecipient === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ORDescriptor>(() => _encode_ORDescriptor, $.BER), $.BER)(value.pilotRecipient, $.BER)),
            /* IF_ABSENT  */ ((value.pilotSecurity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SecurityLabel, $.BER)(value.pilotSecurity, $.BER)),
            /* IF_ABSENT  */ ((value.pilotHandling === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<MilitaryString>(() => _encode_MilitaryString, $.BER), $.BER)(value.pilotHandling, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PilotInformation(value, elGetter);
}


/* eslint-enable */
