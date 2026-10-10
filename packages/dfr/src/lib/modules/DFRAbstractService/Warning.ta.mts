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
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
import { AccessProblem, _enum_for_AccessProblem, _decode_AccessProblem, _encode_AccessProblem } from "../DFRAbstractService/AccessProblem.ta.mjs";
import { ReferentAccessProblem, _enum_for_ReferentAccessProblem, _decode_ReferentAccessProblem, _encode_ReferentAccessProblem } from "../DFRAbstractService/ReferentAccessProblem.ta.mjs";


/**
 * @summary Warning
 * @description
 *
 * One skipped entry during List/Copy, with an access or referent- access
 * problem. Not sent if the user has no read right to it. ISO/IEC 10166-1:1991
 * §8.1.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Warning ::= SEQUENCE {
 *     entry          [0] DfrEntryName,
 *     accessl        [1] AccessProblem OPTIONAL, -- see 8.3.3
 *     access2        [2] ReferentAccessProblem OPTIONAL -- see 8.3.5
 * }
 * ```
 * 
 * @class
 */
export
class Warning {
    constructor (
        /**
         * @summary `entry`.
         * @description
         *
         * Entry that could not be processed.
         * @public
         * @readonly
         */
        readonly entry: DfrEntryName,
        /**
         * @summary `accessl`.
         * @description
         *
         * AccessProblem; see ISO/IEC 10166-1:1991 §8.3.3.
         * @public
         * @readonly
         */
        readonly accessl: OPTIONAL<AccessProblem>,
        /**
         * @summary `access2`.
         * @description
         *
         * ReferentAccessProblem; see ISO/IEC 10166-1:1991 §8.3.5.
         * @public
         * @readonly
         */
        readonly access2: OPTIONAL<ReferentAccessProblem>
    ) {}

    /**
     * @summary Restructures an object into a Warning
     * @description
     * 
     * This takes an `object` and converts it to a `Warning`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Warning`.
     * @returns {Warning}
     */
    public static _from_object (_o: { [_K in keyof (Warning)]: (Warning)[_K] }): Warning {
        return new Warning(_o.entry, _o.accessl, _o.access2);
    }

        /**
         * @summary The enum used as the type of the component `accessl`
         * @public
         * @static
         */

    public static _enum_for_accessl = _enum_for_AccessProblem;        /**
         * @summary The enum used as the type of the component `access2`
         * @public
         * @static
         */

    public static _enum_for_access2 = _enum_for_ReferentAccessProblem;
}

/**
 * @summary The Leading Root Component Types of Warning
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Warning: $.ComponentSpec[] = [
    new $.ComponentSpec("entry", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessl", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("access2", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Warning
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Warning: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Warning
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Warning: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Warning: $.ASN1Decoder<Warning> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Warning
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Warning (el: _Element): Warning {
    if (!_cached_decoder_for_Warning) { _cached_decoder_for_Warning = function (el: _Element): Warning {
    let entry!: DfrEntryName;
    let accessl: OPTIONAL<AccessProblem>;
    let access2: OPTIONAL<ReferentAccessProblem>;
    const callbacks: $.DecodingMap = {
        "entry": (_el: _Element): void => { entry = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(_el); },
        "accessl": (_el: _Element): void => { accessl = $._decode_implicit<AccessProblem>(() => _decode_AccessProblem)(_el); },
        "access2": (_el: _Element): void => { access2 = $._decode_implicit<ReferentAccessProblem>(() => _decode_ReferentAccessProblem)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Warning,
        _extension_additions_list_spec_for_Warning,
        _root_component_type_list_2_spec_for_Warning,
        undefined,
    );
    return new Warning(
        entry,
        accessl,
        access2
    );
}; }
    return _cached_decoder_for_Warning(el);
}

let _cached_encoder_for_Warning: $.ASN1Encoder<Warning> | null = null;

/**
 * @summary Encodes a(n) Warning into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Warning, encoded as an ASN.1 Element.
 */
export
function _encode_Warning (value: Warning, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Warning) { _cached_encoder_for_Warning = function (value: Warning): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER)(value.entry, $.BER),
            /* IF_ABSENT  */ ((value.accessl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AccessProblem, $.BER)(value.accessl, $.BER)),
            /* IF_ABSENT  */ ((value.access2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ReferentAccessProblem, $.BER)(value.access2, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Warning(value, elGetter);
}


/* eslint-enable */
