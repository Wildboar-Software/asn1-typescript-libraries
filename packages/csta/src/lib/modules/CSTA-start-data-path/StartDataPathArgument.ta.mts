/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { IORegisterReqID, _decode_IORegisterReqID, _encode_IORegisterReqID } from "../CSTA-device-feature-types/IORegisterReqID.ta.mjs";

import { CSTAObject, _decode_CSTAObject, _encode_CSTAObject } from "../CSTA-switching-function-objects/CSTAObject.ta.mjs";

import {
    DataPathDirection,
    _enum_for_DataPathDirection,
    _decode_DataPathDirection,
    _encode_DataPathDirection
} from "../CSTA-start-data-path/DataPathDirection.ta.mjs";

import {
    DataPathType,
    _enum_for_DataPathType,
    _decode_DataPathType,
    _encode_DataPathType
} from "../CSTA-device-feature-types/DataPathType.ta.mjs";

import { DisplayID, _decode_DisplayID, _encode_DisplayID } from "../CSTA-physical-device-feature/DisplayID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary StartDataPathArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartDataPathArgument ::= SEQUENCE
 * {    ioRegisterReqID            IORegisterReqID                OPTIONAL,
 *     object                CSTAObject,
 *     dataPathDirection        [0] IMPLICIT DataPathDirection        OPTIONAL,
 *     dataPathType            [1] IMPLICIT DataPathType        OPTIONAL,
 *     displayID            DisplayID                OPTIONAL,
 *     numberOfCharactersToCollect    [2] IMPLICIT INTEGER            OPTIONAL,
 *     terminationCharacter        IA5String (SIZE(1..1))            OPTIONAL,
 *     timeout                [3] IMPLICIT INTEGER            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class StartDataPathArgument {
    constructor (
        /**
         * @summary `ioRegisterReqID`.
         * @public
         * @readonly
         */
        readonly ioRegisterReqID: OPTIONAL<IORegisterReqID>,
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: CSTAObject,
        /**
         * @summary `dataPathDirection`.
         * @public
         * @readonly
         */
        readonly dataPathDirection: OPTIONAL<DataPathDirection>,
        /**
         * @summary `dataPathType`.
         * @public
         * @readonly
         */
        readonly dataPathType: OPTIONAL<DataPathType>,
        /**
         * @summary `displayID`.
         * @public
         * @readonly
         */
        readonly displayID: OPTIONAL<DisplayID>,
        /**
         * @summary `numberOfCharactersToCollect`.
         * @public
         * @readonly
         */
        readonly numberOfCharactersToCollect: OPTIONAL<INTEGER>,
        /**
         * @summary `terminationCharacter`.
         * @public
         * @readonly
         */
        readonly terminationCharacter: OPTIONAL<IA5String>,
        /**
         * @summary `timeout`.
         * @public
         * @readonly
         */
        readonly timeout: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a StartDataPathArgument
     * @description
     * 
     * This takes an `object` and converts it to a `StartDataPathArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartDataPathArgument`.
     * @returns {StartDataPathArgument}
     */
    public static _from_object (_o: { [_K in keyof (StartDataPathArgument)]: (StartDataPathArgument)[_K] }): StartDataPathArgument {
        return new StartDataPathArgument(_o.ioRegisterReqID, _o.object, _o.dataPathDirection, _o.dataPathType, _o.displayID, _o.numberOfCharactersToCollect, _o.terminationCharacter, _o.timeout, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `dataPathDirection`
         * @public
         * @static
         */

    public static _enum_for_dataPathDirection = _enum_for_DataPathDirection;        /**
         * @summary The enum used as the type of the component `dataPathType`
         * @public
         * @static
         */

    public static _enum_for_dataPathType = _enum_for_DataPathType;
}

/**
 * @summary The Leading Root Component Types of StartDataPathArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartDataPathArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("ioRegisterReqID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("object", false, $.hasAnyTag),
    new $.ComponentSpec("dataPathDirection", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dataPathType", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("displayID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("numberOfCharactersToCollect", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("terminationCharacter", true, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("timeout", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of StartDataPathArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartDataPathArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartDataPathArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartDataPathArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartDataPathArgument: $.ASN1Decoder<StartDataPathArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartDataPathArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartDataPathArgument (el: _Element): StartDataPathArgument {
    if (!_cached_decoder_for_StartDataPathArgument) { _cached_decoder_for_StartDataPathArgument = function (el: _Element): StartDataPathArgument {
    let ioRegisterReqID: OPTIONAL<IORegisterReqID>;
    let object!: CSTAObject;
    let dataPathDirection: OPTIONAL<DataPathDirection>;
    let dataPathType: OPTIONAL<DataPathType>;
    let displayID: OPTIONAL<DisplayID>;
    let numberOfCharactersToCollect: OPTIONAL<INTEGER>;
    let terminationCharacter: OPTIONAL<IA5String>;
    let timeout: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ioRegisterReqID": (_el: _Element): void => { ioRegisterReqID = _decode_IORegisterReqID(_el); },
        "object": (_el: _Element): void => { object = _decode_CSTAObject(_el); },
        "dataPathDirection": (_el: _Element): void => { dataPathDirection = $._decode_implicit<DataPathDirection>(() => _decode_DataPathDirection)(_el); },
        "dataPathType": (_el: _Element): void => { dataPathType = $._decode_implicit<DataPathType>(() => _decode_DataPathType)(_el); },
        "displayID": (_el: _Element): void => { displayID = _decode_DisplayID(_el); },
        "numberOfCharactersToCollect": (_el: _Element): void => { numberOfCharactersToCollect = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "terminationCharacter": (_el: _Element): void => { terminationCharacter = $._decodeIA5String(_el); },
        "timeout": (_el: _Element): void => { timeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartDataPathArgument,
        _extension_additions_list_spec_for_StartDataPathArgument,
        _root_component_type_list_2_spec_for_StartDataPathArgument,
        undefined,
    );
    return new StartDataPathArgument(
        ioRegisterReqID,
        object,
        dataPathDirection,
        dataPathType,
        displayID,
        numberOfCharactersToCollect,
        terminationCharacter,
        timeout,
        extensions
    );
}; }
    return _cached_decoder_for_StartDataPathArgument(el);
}

let _cached_encoder_for_StartDataPathArgument: $.ASN1Encoder<StartDataPathArgument> | null = null;

/**
 * @summary Encodes a(n) StartDataPathArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartDataPathArgument, encoded as an ASN.1 Element.
 */
export
function _encode_StartDataPathArgument (value: StartDataPathArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartDataPathArgument) { _cached_encoder_for_StartDataPathArgument = function (value: StartDataPathArgument, elGetter: $.ASN1Encoder<StartDataPathArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ioRegisterReqID === undefined) ? undefined : _encode_IORegisterReqID(value.ioRegisterReqID, $.BER)),
            /* REQUIRED   */ _encode_CSTAObject(value.object, $.BER),
            /* IF_ABSENT  */ ((value.dataPathDirection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DataPathDirection, $.BER)(value.dataPathDirection, $.BER)),
            /* IF_ABSENT  */ ((value.dataPathType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DataPathType, $.BER)(value.dataPathType, $.BER)),
            /* IF_ABSENT  */ ((value.displayID === undefined) ? undefined : _encode_DisplayID(value.displayID, $.BER)),
            /* IF_ABSENT  */ ((value.numberOfCharactersToCollect === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.numberOfCharactersToCollect, $.BER)),
            /* IF_ABSENT  */ ((value.terminationCharacter === undefined) ? undefined : $._encodeIA5String(value.terminationCharacter, $.BER)),
            /* IF_ABSENT  */ ((value.timeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.timeout, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartDataPathArgument(value, elGetter);
}


/* eslint-enable */
