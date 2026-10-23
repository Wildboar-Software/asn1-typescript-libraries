/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import {
    ORDescriptor,
    _decode_ORDescriptor,
    _encode_ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from "@wildboar/x400/MTSAbstractService";
import { MMHSPrecedence, _decode_MMHSPrecedence, _encode_MMHSPrecedence } from "../MMSHeadingExtensions/MMHSPrecedence.ta.mjs";
import { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary PilotInformation
 * @description
 * 
 * One set of ACP 127 pilot information that equals or supersedes the received
 * heading for precedence, classification, local handling, and addressing. A
 * gateway translates a pilot by sending the original body as the text body of a
 * new message. Transitional. Absence of the heading extension means the message
 * has no pilot information. STANAG 4406 (Ed. 2), Annex A, A1.13 and B.115.
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
    /**
     * @summary `pilotPrecedence`.
     * @description
     *
     * Precedence that equals or supersedes the received precedence. Values 0 to
     * 15 are NATO; 16 to 31 are national. Optional. STANAG 4406 (Ed. 2), Annex
     * A, A1.13.
     * @public
     * @readonly
     */
    readonly pilotPrecedence: OPTIONAL<MMHSPrecedence>;
    /**
     * @summary `pilotRecipient`.
     * @description
     *
     * Addresses that equal or supersede the received addressing. Optional.
     * STANAG 4406 (Ed. 2), Annex A, A1.13.
     * @public
     * @readonly
     */
    readonly pilotRecipient: OPTIONAL<ORDescriptor[]>;
    /**
     * @summary `pilotSecurity`.
     * @description
     *
     * Classification that equals or supersedes the received classification. An
     * X.411 message security label (clause 8.5.9). Optional. STANAG 4406 (Ed.
     * 2), Annex A, A1.13.
     * @public
     * @readonly
     */
    readonly pilotSecurity: OPTIONAL<SecurityLabel>;
    /**
     * @summary `pilotHandling`.
     * @description
     *
     * Local handling instructions that equal or supersede the received
     * instructions. Optional. STANAG 4406 (Ed. 2), Annex A, A1.13.
     * @public
     * @readonly
     */
    readonly pilotHandling: OPTIONAL<MilitaryString[]>;

    constructor (
        pilotPrecedence?: OPTIONAL<MMHSPrecedence>,
        pilotRecipient?: OPTIONAL<ORDescriptor[]>,
        pilotSecurity?: OPTIONAL<SecurityLabel>,
        pilotHandling?: OPTIONAL<MilitaryString[]>
    ) {
        this.pilotPrecedence = pilotPrecedence;
        this.pilotRecipient = pilotRecipient;
        this.pilotSecurity = pilotSecurity;
        this.pilotHandling = pilotHandling;
    }

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
    new $.ComponentSpec("pilotSecurity", true, $.hasTag(_TagClass.context, 2)),
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
    if (!_cached_encoder_for_PilotInformation) { _cached_encoder_for_PilotInformation = function (value: PilotInformation): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.pilotPrecedence !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_MMHSPrecedence, $.BER)(value.pilotPrecedence, $.BER);
    }
    if (value.pilotRecipient !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ORDescriptor>(() => _encode_ORDescriptor, $.BER), $.BER)(value.pilotRecipient, $.BER);
    }
    if (value.pilotSecurity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SecurityLabel, $.BER)(value.pilotSecurity, $.BER);
    }
    if (value.pilotHandling !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<MilitaryString>(() => _encode_MilitaryString, $.BER), $.BER)(value.pilotHandling, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PilotInformation(value, elGetter);
}


/* eslint-enable */
