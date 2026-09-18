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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CCOupdate
 * @description
 *
 * Context Control Object update: starting point for data entry, or
 * termination point plus reason. Not partially updatable (not the
 * multi-element form). ISO/IEC 9040:1997 §3.3.69, §14.2 e, §20;
 * ISO/IEC 9041-1:1997 §12.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCOupdate ::= SEQUENCE {
 *     kCoordinate         [0] IMPLICIT INTEGER,
 *     fCoordinate         [1] IMPLICIT INTEGER,
 *     zCoordinate         [2] IMPLICIT INTEGER OPTIONAL,
 *     -- required when VT-dirnensions="three
 *     entryControlIndex   [3] IMPLICIT INTEGER OPTIONAL,
 *     deviceObjectIndex   [4] IMPLICIT INTEGER OPTIONAL,
 *     feprIndex           [5] IMPLICIT INTEGER OPTIONAL
 *     -- Items with tags [3], [4] and [5] are required on termination update.
 *     -- See ISO/IEC 9040.
 * }
 * ```
 * 
 * @class
 */
export
class CCOupdate {
    constructor (
        /**
         * @summary `kCoordinate`.
         * @description
         * Field-element coordinate of the context. ISO/IEC 9040:1997
         * §3.3.69; ISO/IEC 9041-1:1997 §12.2.1.
         * @public
         * @readonly
         */
        readonly kCoordinate: INTEGER,
        /**
         * @summary `fCoordinate`.
         * @description
         * Field coordinate of the context. ISO/IEC 9040:1997 §3.3.69;
         * ISO/IEC 9041-1:1997 §12.2.1.
         * @public
         * @readonly
         */
        readonly fCoordinate: INTEGER,
        /**
         * @summary `zCoordinate`.
         * @description
         * Required when VT-dimensions = three. ISO/IEC 9041-1:1997
         * §12.2.1.
         * @public
         * @readonly
         */
        readonly zCoordinate: OPTIONAL<INTEGER>,
        /**
         * @summary `entryControlIndex`.
         * @description
         * Required on a termination update. ISO/IEC 9041-1:1997 §12.2.1.
         * @public
         * @readonly
         */
        readonly entryControlIndex: OPTIONAL<INTEGER>,
        /**
         * @summary `deviceObjectIndex`.
         * @description
         * Required on a termination update. ISO/IEC 9041-1:1997 §12.2.1.
         * @public
         * @readonly
         */
        readonly deviceObjectIndex: OPTIONAL<INTEGER>,
        /**
         * @summary `feprIndex`.
         * @description
         * Field Entry Pilot Record index. Required on a termination
         * update. ISO/IEC 9041-1:1997 §12.2.1.
         * @public
         * @readonly
         */
        readonly feprIndex: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a CCOupdate
     * @description
     * 
     * This takes an `object` and converts it to a `CCOupdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCOupdate`.
     * @returns {CCOupdate}
     */
    public static _from_object (_o: { [_K in keyof (CCOupdate)]: (CCOupdate)[_K] }): CCOupdate {
        return new CCOupdate(_o.kCoordinate, _o.fCoordinate, _o.zCoordinate, _o.entryControlIndex, _o.deviceObjectIndex, _o.feprIndex);
    }


}

/**
 * @summary The Leading Root Component Types of CCOupdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCOupdate: $.ComponentSpec[] = [
    new $.ComponentSpec("kCoordinate", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fCoordinate", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("zCoordinate", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("entryControlIndex", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("deviceObjectIndex", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("feprIndex", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of CCOupdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCOupdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCOupdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCOupdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCOupdate: $.ASN1Decoder<CCOupdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCOupdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCOupdate (el: _Element): CCOupdate {
    if (!_cached_decoder_for_CCOupdate) { _cached_decoder_for_CCOupdate = function (el: _Element): CCOupdate {
    let kCoordinate!: INTEGER;
    let fCoordinate!: INTEGER;
    let zCoordinate: OPTIONAL<INTEGER>;
    let entryControlIndex: OPTIONAL<INTEGER>;
    let deviceObjectIndex: OPTIONAL<INTEGER>;
    let feprIndex: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "kCoordinate": (_el: _Element): void => { kCoordinate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "fCoordinate": (_el: _Element): void => { fCoordinate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "zCoordinate": (_el: _Element): void => { zCoordinate = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "entryControlIndex": (_el: _Element): void => { entryControlIndex = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "deviceObjectIndex": (_el: _Element): void => { deviceObjectIndex = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "feprIndex": (_el: _Element): void => { feprIndex = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CCOupdate,
        _extension_additions_list_spec_for_CCOupdate,
        _root_component_type_list_2_spec_for_CCOupdate,
        undefined,
    );
    return new CCOupdate(
        kCoordinate,
        fCoordinate,
        zCoordinate,
        entryControlIndex,
        deviceObjectIndex,
        feprIndex
    );
}; }
    return _cached_decoder_for_CCOupdate(el);
}

let _cached_encoder_for_CCOupdate: $.ASN1Encoder<CCOupdate> | null = null;

/**
 * @summary Encodes a(n) CCOupdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCOupdate, encoded as an ASN.1 Element.
 */
export
function _encode_CCOupdate (value: CCOupdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCOupdate) { _cached_encoder_for_CCOupdate = function (value: CCOupdate): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.kCoordinate, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.fCoordinate, $.BER),
            /* IF_ABSENT  */ ((value.zCoordinate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.zCoordinate, $.BER)),
            /* IF_ABSENT  */ ((value.entryControlIndex === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.entryControlIndex, $.BER)),
            /* IF_ABSENT  */ ((value.deviceObjectIndex === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.deviceObjectIndex, $.BER)),
            /* IF_ABSENT  */ ((value.feprIndex === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.feprIndex, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CCOupdate(value, elGetter);
}


/* eslint-enable */
