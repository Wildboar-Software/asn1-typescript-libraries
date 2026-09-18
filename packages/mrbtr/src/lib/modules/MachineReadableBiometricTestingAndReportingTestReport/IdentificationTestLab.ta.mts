/* eslint-disable */
import {
    OPTIONAL,
    VisibleString,
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



/**
 * @summary IdentificationTestLab
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IdentificationTestLab ::= SEQUENCE {
 *     nameLab             VisibleString,
 *     location            VisibleString,
 *     testImplementor     VisibleString OPTIONAL,
 *     testReportSignatory VisibleString,
 *     contactInformation  VisibleString
 * }
 * ```
 * 
 * @class
 */
export
class IdentificationTestLab {
    constructor (
        /**
         * @summary `nameLab`.
         * @public
         * @readonly
         */
        readonly nameLab: VisibleString,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: VisibleString,
        /**
         * @summary `testImplementor`.
         * @public
         * @readonly
         */
        readonly testImplementor: OPTIONAL<VisibleString>,
        /**
         * @summary `testReportSignatory`.
         * @public
         * @readonly
         */
        readonly testReportSignatory: VisibleString,
        /**
         * @summary `contactInformation`.
         * @public
         * @readonly
         */
        readonly contactInformation: VisibleString
    ) {}

    /**
     * @summary Restructures an object into a IdentificationTestLab
     * @description
     * 
     * This takes an `object` and converts it to a `IdentificationTestLab`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IdentificationTestLab`.
     * @returns {IdentificationTestLab}
     */
    public static _from_object (_o: { [_K in keyof (IdentificationTestLab)]: (IdentificationTestLab)[_K] }): IdentificationTestLab {
        return new IdentificationTestLab(_o.nameLab, _o.location, _o.testImplementor, _o.testReportSignatory, _o.contactInformation);
    }


}

/**
 * @summary The Leading Root Component Types of IdentificationTestLab
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IdentificationTestLab: $.ComponentSpec[] = [
    new $.ComponentSpec("nameLab", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("testImplementor", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("testReportSignatory", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("contactInformation", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of IdentificationTestLab
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IdentificationTestLab: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IdentificationTestLab
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IdentificationTestLab: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IdentificationTestLab: $.ASN1Decoder<IdentificationTestLab> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IdentificationTestLab
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IdentificationTestLab (el: _Element): IdentificationTestLab {
    if (!_cached_decoder_for_IdentificationTestLab) { _cached_decoder_for_IdentificationTestLab = function (el: _Element): IdentificationTestLab {
    let nameLab!: VisibleString;
    let location!: VisibleString;
    let testImplementor: OPTIONAL<VisibleString>;
    let testReportSignatory!: VisibleString;
    let contactInformation!: VisibleString;
    const callbacks: $.DecodingMap = {
        "nameLab": (_el: _Element): void => { nameLab = $._decodeVisibleString(_el); },
        "location": (_el: _Element): void => { location = $._decodeVisibleString(_el); },
        "testImplementor": (_el: _Element): void => { testImplementor = $._decodeVisibleString(_el); },
        "testReportSignatory": (_el: _Element): void => { testReportSignatory = $._decodeVisibleString(_el); },
        "contactInformation": (_el: _Element): void => { contactInformation = $._decodeVisibleString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IdentificationTestLab,
        _extension_additions_list_spec_for_IdentificationTestLab,
        _root_component_type_list_2_spec_for_IdentificationTestLab,
        undefined,
    );
    return new IdentificationTestLab(
        nameLab,
        location,
        testImplementor,
        testReportSignatory,
        contactInformation
    );
}; }
    return _cached_decoder_for_IdentificationTestLab(el);
}

let _cached_encoder_for_IdentificationTestLab: $.ASN1Encoder<IdentificationTestLab> | null = null;

/**
 * @summary Encodes a(n) IdentificationTestLab into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdentificationTestLab, encoded as an ASN.1 Element.
 */
export
function _encode_IdentificationTestLab (value: IdentificationTestLab, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IdentificationTestLab) { _cached_encoder_for_IdentificationTestLab = function (value: IdentificationTestLab): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.nameLab, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeVisibleString, $.BER)(value.location, $.BER),
            /* IF_ABSENT */ ((value.testImplementor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeVisibleString, $.BER)(value.testImplementor, $.BER)),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeVisibleString, $.BER)(value.testReportSignatory, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeVisibleString, $.BER)(value.contactInformation, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IdentificationTestLab(value, elGetter);
}


/* eslint-enable */
