/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { SecurityLevel, _enum_for_SecurityLevel, _decode_SecurityLevel, _encode_SecurityLevel } from "../PlatformCertificateProfile/SecurityLevel.ta.mjs";
/**
 * @summary FIPSLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FIPSLevel ::= SEQUENCE {
 *     version         IA5String (SIZE (1..strmax)), -- “140-1”, “140-2”, or “140-3”
 *     level           SecurityLevel,
 *     plus            BOOLEAN DEFAULT FALSE }
 * ```
 * 
 * @class
 */
export
class FIPSLevel {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: IA5String,
        /**
         * @summary `level`.
         * @public
         * @readonly
         */
        readonly level: SecurityLevel,
        /**
         * @summary `plus`.
         * @public
         * @readonly
         */
        readonly plus: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a FIPSLevel
     * @description
     * 
     * This takes an `object` and converts it to a `FIPSLevel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FIPSLevel`.
     * @returns {FIPSLevel}
     */
    public static _from_object (_o: { [_K in keyof (FIPSLevel)]: (FIPSLevel)[_K] }): FIPSLevel {
        return new FIPSLevel(_o.version, _o.level, _o.plus);
    }

    /**
     * @summary Getter that returns the default value for `plus`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_plus () { return false; }        /**
         * @summary The enum used as the type of the component `level`
         * @public
         * @static
         */

    public static _enum_for_level = _enum_for_SecurityLevel;
}

/**
 * @summary The Leading Root Component Types of FIPSLevel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FIPSLevel: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 22), undefined, undefined),
    new $.ComponentSpec("level", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("plus", true, $.hasTag(_TagClass.universal, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of FIPSLevel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FIPSLevel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FIPSLevel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FIPSLevel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FIPSLevel: $.ASN1Decoder<FIPSLevel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FIPSLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FIPSLevel} The decoded data structure.
 */
export
function _decode_FIPSLevel (el: _Element) {
    if (!_cached_decoder_for_FIPSLevel) { _cached_decoder_for_FIPSLevel = function (el: _Element): FIPSLevel {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: IA5String;
    let level!: SecurityLevel;
    let plus: OPTIONAL<BOOLEAN> = FIPSLevel._default_value_for_plus;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decodeIA5String(_el); },
        "level": (_el: _Element): void => { level = _decode_SecurityLevel(_el); },
        "plus": (_el: _Element): void => { plus = $._decodeBoolean(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FIPSLevel,
        _extension_additions_list_spec_for_FIPSLevel,
        _root_component_type_list_2_spec_for_FIPSLevel,
        undefined,
    );
    return new FIPSLevel( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        level,
        plus
    );
}; }
    return _cached_decoder_for_FIPSLevel(el);
}

let _cached_encoder_for_FIPSLevel: $.ASN1Encoder<FIPSLevel> | null = null;

/**
 * @summary Encodes a(n) FIPSLevel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FIPSLevel, encoded as an ASN.1 Element.
 */
export
function _encode_FIPSLevel (value: FIPSLevel, elGetter: $.ASN1Encoder<FIPSLevel>) {
    if (!_cached_encoder_for_FIPSLevel) { _cached_encoder_for_FIPSLevel = function (value: FIPSLevel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeIA5String(value.version, $.BER),
            /* REQUIRED   */ _encode_SecurityLevel(value.level, $.BER),
            /* IF_DEFAULT */ (value.plus === undefined || $.deepEq(value.plus, FIPSLevel._default_value_for_plus) ? undefined : $._encodeBoolean(value.plus, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FIPSLevel(value, elGetter);
}


/* eslint-enable */
