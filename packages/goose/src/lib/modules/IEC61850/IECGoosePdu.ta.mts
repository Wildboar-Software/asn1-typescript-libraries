/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    VisibleString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UtcTime, _decode_UtcTime, _encode_UtcTime } from "../IEC61850/UtcTime.ta.mjs";
// export { UtcTime, _decode_UtcTime, _encode_UtcTime } from "../IEC61850/UtcTime.ta.mjs";
import { Data, _decode_Data, _encode_Data } from "../IEC61850/Data.ta.mjs";
// export { Data, _decode_Data, _encode_Data } from "../IEC61850/Data.ta.mjs";


/**
 * @summary IECGoosePdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IECGoosePdu ::= SEQUENCE {
 *     gocbRef                [0] IMPLICIT VisibleString,
 *     timeAllowedtoLive    [1] IMPLICIT INTEGER,
 *     datSet                [2] IMPLICIT VisibleString,
 *     goID                [3] IMPLICIT VisibleString OPTIONAL,
 *     t                    [4] IMPLICIT UtcTime,
 *     stNum                [5] IMPLICIT INTEGER,
 *     sqNum                [6] IMPLICIT INTEGER,
 *     simulation            [7] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     confRev                [8] IMPLICIT INTEGER,
 *     ndsCom                [9] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     numDatSetEntries    [10] IMPLICIT INTEGER,
 *     allData                [11] IMPLICIT SEQUENCE OF Data --,
 * --    security            [12] ANY OPTIONAL
 *                              -- reserved for digital signature
 * }
 * ```
 * 
 * @class
 */
export
class IECGoosePdu {
    constructor (
        /**
         * @summary `gocbRef`.
         * @public
         * @readonly
         */
        readonly gocbRef: VisibleString,
        /**
         * @summary `timeAllowedtoLive`.
         * @public
         * @readonly
         */
        readonly timeAllowedtoLive: INTEGER,
        /**
         * @summary `datSet`.
         * @public
         * @readonly
         */
        readonly datSet: VisibleString,
        /**
         * @summary `goID`.
         * @public
         * @readonly
         */
        readonly goID: OPTIONAL<VisibleString>,
        /**
         * @summary `t`.
         * @public
         * @readonly
         */
        readonly t: UtcTime,
        /**
         * @summary `stNum`.
         * @public
         * @readonly
         */
        readonly stNum: INTEGER,
        /**
         * @summary `sqNum`.
         * @public
         * @readonly
         */
        readonly sqNum: INTEGER,
        /**
         * @summary `simulation`.
         * @public
         * @readonly
         */
        readonly simulation: OPTIONAL<BOOLEAN>,
        /**
         * @summary `confRev`.
         * @public
         * @readonly
         */
        readonly confRev: INTEGER,
        /**
         * @summary `ndsCom`.
         * @public
         * @readonly
         */
        readonly ndsCom: OPTIONAL<BOOLEAN>,
        /**
         * @summary `numDatSetEntries`.
         * @public
         * @readonly
         */
        readonly numDatSetEntries: INTEGER,
        /**
         * @summary `allData`.
         * @public
         * @readonly
         */
        readonly allData: Data[]
    ) {}

    /**
     * @summary Restructures an object into a IECGoosePdu
     * @description
     * 
     * This takes an `object` and converts it to a `IECGoosePdu`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IECGoosePdu`.
     * @returns {IECGoosePdu}
     */
    public static _from_object (_o: { [_K in keyof (IECGoosePdu)]: (IECGoosePdu)[_K] }): IECGoosePdu {
        return new IECGoosePdu(_o.gocbRef, _o.timeAllowedtoLive, _o.datSet, _o.goID, _o.t, _o.stNum, _o.sqNum, _o.simulation, _o.confRev, _o.ndsCom, _o.numDatSetEntries, _o.allData);
    }

    /**
     * @summary Getter that returns the default value for `simulation`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_simulation () { return false; }
    /**
     * @summary Getter that returns the default value for `ndsCom`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_ndsCom () { return false; }
}

/**
 * @summary The Leading Root Component Types of IECGoosePdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IECGoosePdu: $.ComponentSpec[] = [
    new $.ComponentSpec("gocbRef", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timeAllowedtoLive", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("datSet", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("goID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("t", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("stNum", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sqNum", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("simulation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("confRev", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("ndsCom", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("numDatSetEntries", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("allData", false, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of IECGoosePdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IECGoosePdu: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IECGoosePdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IECGoosePdu: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IECGoosePdu: $.ASN1Decoder<IECGoosePdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IECGoosePdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IECGoosePdu (el: _Element): IECGoosePdu {
    if (!_cached_decoder_for_IECGoosePdu) { _cached_decoder_for_IECGoosePdu = function (el: _Element): IECGoosePdu {
    let gocbRef!: VisibleString;
    let timeAllowedtoLive!: INTEGER;
    let datSet!: VisibleString;
    let goID: OPTIONAL<VisibleString>;
    let t!: UtcTime;
    let stNum!: INTEGER;
    let sqNum!: INTEGER;
    let simulation: OPTIONAL<BOOLEAN> = IECGoosePdu._default_value_for_simulation;
    let confRev!: INTEGER;
    let ndsCom: OPTIONAL<BOOLEAN> = IECGoosePdu._default_value_for_ndsCom;
    let numDatSetEntries!: INTEGER;
    let allData!: Data[];
    const callbacks: $.DecodingMap = {
        "gocbRef": (_el: _Element): void => { gocbRef = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "timeAllowedtoLive": (_el: _Element): void => { timeAllowedtoLive = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "datSet": (_el: _Element): void => { datSet = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "goID": (_el: _Element): void => { goID = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); },
        "t": (_el: _Element): void => { t = $._decode_implicit<UtcTime>(() => _decode_UtcTime)(_el); },
        "stNum": (_el: _Element): void => { stNum = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sqNum": (_el: _Element): void => { sqNum = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "simulation": (_el: _Element): void => { simulation = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "confRev": (_el: _Element): void => { confRev = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ndsCom": (_el: _Element): void => { ndsCom = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "numDatSetEntries": (_el: _Element): void => { numDatSetEntries = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "allData": (_el: _Element): void => { allData = $._decode_implicit<Data[]>(() => $._decodeSequenceOf<Data>(() => _decode_Data))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IECGoosePdu,
        _extension_additions_list_spec_for_IECGoosePdu,
        _root_component_type_list_2_spec_for_IECGoosePdu,
        undefined,
    );
    return new IECGoosePdu(
        gocbRef,
        timeAllowedtoLive,
        datSet,
        goID,
        t,
        stNum,
        sqNum,
        simulation,
        confRev,
        ndsCom,
        numDatSetEntries,
        allData
    );
}; }
    return _cached_decoder_for_IECGoosePdu(el);
}

let _cached_encoder_for_IECGoosePdu: $.ASN1Encoder<IECGoosePdu> | null = null;

/**
 * @summary Encodes a(n) IECGoosePdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IECGoosePdu, encoded as an ASN.1 Element.
 */
export
function _encode_IECGoosePdu (value: IECGoosePdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IECGoosePdu) { _cached_encoder_for_IECGoosePdu = function (value: IECGoosePdu, elGetter: $.ASN1Encoder<IECGoosePdu>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeVisibleString, $.BER)(value.gocbRef, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.timeAllowedtoLive, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeVisibleString, $.BER)(value.datSet, $.BER),
            /* IF_ABSENT  */ ((value.goID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeVisibleString, $.BER)(value.goID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_UtcTime, $.BER)(value.t, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.stNum, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.sqNum, $.BER),
            /* IF_DEFAULT */ (value.simulation === undefined || $.deepEq(value.simulation, IECGoosePdu._default_value_for_simulation) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.simulation, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.confRev, $.BER),
            /* IF_DEFAULT */ (value.ndsCom === undefined || $.deepEq(value.ndsCom, IECGoosePdu._default_value_for_ndsCom) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeBoolean, $.BER)(value.ndsCom, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.numDatSetEntries, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSequenceOf<Data>(() => _encode_Data, $.BER), $.BER)(value.allData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IECGoosePdu(value, elGetter);
}


/* eslint-enable */
