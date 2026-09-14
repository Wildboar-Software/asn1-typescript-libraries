/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Path_efidOrTagChoice, _decode_Path_efidOrTagChoice, _encode_Path_efidOrTagChoice } from "../CryptographicInformationFramework/Path-efidOrTagChoice.ta.mjs";
import { cia_ub_index } from "../CryptographicInformationFramework/cia-ub-index.va.mjs";
// export { Path_efidOrTagChoice, _decode_Path_efidOrTagChoice, _encode_Path_efidOrTagChoice } from "../CryptographicInformationFramework/Path-efidOrTagChoice.ta.mjs";


/**
 * @summary Path
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Path ::= SEQUENCE {
 *     efidOrTagChoice CHOICE {
 *         efidOrPath      OCTET STRING,
 *         tagRef              [0] SEQUENCE {
 *             tag OCTET STRING,
 *             efidOrPath OCTET STRING OPTIONAL
 *         },
 *         appFileRef          [1] SEQUENCE {
 *             aid [APPLICATION 15] OCTET STRING,
 *             efidOrpath OCTET STRING
 *         },
 *         appTagRef           [2] SEQUENCE {
 *             aid [APPLICATION 15] OCTET STRING,
 *             tag OCTET STRING,
 *             efidOrPath OCTET STRING OPTIONAL
 *         }
 *     },
 *     index           INTEGER (0..cia-ub-index) OPTIONAL,
 *     length          [0] INTEGER (0..cia-ub-index) OPTIONAL
 * }
 * (
 *     WITH COMPONENTS {..., index PRESENT, length PRESENT}
 *     | WITH COMPONENTS {..., index ABSENT, length ABSENT}
 * )
 * ```
 * 
 * @class
 */
export
class Path {
    constructor (
        /**
         * @summary `efidOrTagChoice`.
         * @public
         * @readonly
         */
        readonly efidOrTagChoice: Path_efidOrTagChoice,
        /**
         * @summary `index`.
         * @public
         * @readonly
         */
        readonly index: OPTIONAL<INTEGER>,
        /**
         * @summary `length`.
         * @public
         * @readonly
         */
        readonly length: OPTIONAL<INTEGER>
    ) {
        const indexPresent = index !== undefined;
        const lengthPresent = length !== undefined;
        if (indexPresent !== lengthPresent) {
            throw new ASN1ConstructionError("Path.index and Path.length must be both present or both absent");
        }
        for (const [name, value] of [["index", index], ["length", length]] as const) {
            if (value === undefined) {
                continue;
            }
            const n = typeof value === "bigint" ? value : BigInt(value);
            if (n < 0n || n > BigInt(cia_ub_index)) {
                throw new ASN1OverflowError(`Path.${name} violates INTEGER range`);
            }
        }
    }

    /**
     * @summary Restructures an object into a Path
     * @description
     * 
     * This takes an `object` and converts it to a `Path`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Path`.
     * @returns {Path}
     */
    public static _from_object (_o: { [_K in keyof (Path)]: (Path)[_K] }): Path {
        return new Path(_o.efidOrTagChoice, _o.index, _o.length);
    }


}

/**
 * @summary The Leading Root Component Types of Path
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Path: $.ComponentSpec[] = [
    new $.ComponentSpec("efidOrTagChoice", false, $.hasAnyTag),
    new $.ComponentSpec("index", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("length", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of Path
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Path: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Path
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Path: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Path: $.ASN1Decoder<Path> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Path
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Path (el: _Element): Path {
    if (!_cached_decoder_for_Path) { _cached_decoder_for_Path = function (el: _Element): Path {
    let efidOrTagChoice!: Path_efidOrTagChoice;
    let index: OPTIONAL<INTEGER>;
    let length: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "efidOrTagChoice": (_el: _Element): void => { efidOrTagChoice = _decode_Path_efidOrTagChoice(_el); },
        "index": (_el: _Element): void => { index = $._decodeInteger(_el); },
        "length": (_el: _Element): void => { length = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Path,
        _extension_additions_list_spec_for_Path,
        _root_component_type_list_2_spec_for_Path,
        undefined,
    );
    return new Path(
        efidOrTagChoice,
        index,
        length
    );
}; }
    return _cached_decoder_for_Path(el);
}

let _cached_encoder_for_Path: $.ASN1Encoder<Path> | null = null;

/**
 * @summary Encodes a(n) Path into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Path, encoded as an ASN.1 Element.
 */
export
function _encode_Path (value: Path, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Path) { _cached_encoder_for_Path = function (value: Path): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Path_efidOrTagChoice(value.efidOrTagChoice, $.BER),
            /* IF_ABSENT  */ ((value.index === undefined) ? undefined : $._encodeInteger(value.index, $.BER)),
            /* IF_ABSENT  */ ((value.length === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.length, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Path(value, elGetter);
}


/* eslint-enable */
