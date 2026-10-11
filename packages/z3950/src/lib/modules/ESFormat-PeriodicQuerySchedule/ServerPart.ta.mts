/* eslint-disable */
import {
    GeneralizedTime,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { Query, _decode_Query, _encode_Query } from "../Z39-50-APDU-2001/Query.ta.mjs";
import { Period, _decode_Period, _encode_Period } from "../ESFormat-PeriodicQuerySchedule/Period.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary ServerPart
 * @description
 * 
 * What the server records for a periodic query: the query it will run, the
 * period and expiration it settled on, the result-set package, and how the
 * last runs went. Database names must occur if option bit 20 is set and
 * must not occur if it is not. Additional search information must not
 * occur unless bit 20 is set. Last-query time and last-result number are
 * optional if bit 20 is set and mandatory otherwise; the 2001 ASN.1 also
 * leaves them optional because neither has a value between creation of the
 * package and the first execution.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.3, §3.2.1.1.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerPart ::= SEQUENCE{
 *     databaseNames           [0] IMPLICIT SEQUENCE OF InternationalString OPTIONAL,
 *     -- databaseNames must occur if bit 20 is set
 *     -- and must not occur if option bit 20 is not set
 *     actualQuery             [1] Query,
 *     serverStatedPeriod      [2] Period,
 *     --Server supplies the period, which may be same as client proposed
 *     expiration              [3] IMPLICIT GeneralizedTime OPTIONAL,
 *     --Server supplies value for task package.
 *     --It may be the same as client proposed or different from
 *     --(and overrides) client proposal, but if omitted, there is no expiration.
 *     resultSetPackage        [4] IMPLICIT InternationalString OPTIONAL,
 *     --May be omitted only if exportParameters was supplied.
 *     --Server supplies same name as client supplied, if client did supply a name.
 *     lastQueryTime           [5] IMPLICIT GeneralizedTime OPTIONAL,
 *     lastResultNumber        [6] IMPLICIT INTEGER OPTIONAL,
 *     --Above two were made optional in 2001 version,
 *     --because there won’t be any value for these between
 *     --the time the package is created and the first query is executed.
 *     numberSinceModify       [7] IMPLICIT INTEGER OPTIONAL,
 *     additionalSearchInfo    [8] OtherInformation OPTIONAL
 *     --Must not occur unless option bit 20 is set
 * }
 * ```
 * 
 * @class
 */
export
class ServerPart {
    /**
     * @summary `databaseNames`.
     * @description
     * 
     * Must occur if option bit 20 is set, and must not occur if option bit 20
     * is not set. This is the server's list of databases for the schedule.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3, §3.2.1.1.3.
     * 
     * @public
     * @readonly
     */
    readonly databaseNames: OPTIONAL<InternationalString[]>;
    /**
     * @summary `actualQuery`.
     * @description
     * 
     * The query the server will run. If the client supplied a query, the
     * server uses it. If the client supplied a Persistent Query package name,
     * the server copies that package's query.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3.
     * 
     * @public
     * @readonly
     */
    readonly actualQuery: Query;
    /**
     * @summary `serverStatedPeriod`.
     * @description
     * 
     * Period the server will use. It may match the client's suggestion. The
     * server may override the client.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3.
     * 
     * @public
     * @readonly
     */
    readonly serverStatedPeriod: Period;
    /**
     * @summary `expiration`.
     * @description
     * 
     * When the server will stop running this schedule. It may match the
     * client's proposal or override it. If omitted, there is no expiration.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3.
     * 
     * @public
     * @readonly
     */
    readonly expiration: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `resultSetPackage`.
     * @description
     * 
     * Name of the Persistent Result Set package that receives results. May be
     * omitted only when export parameters were supplied. If the client
     * supplied a name, the server supplies that same name.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3.
     * 
     * @public
     * @readonly
     */
    readonly resultSetPackage: OPTIONAL<InternationalString>;
    /**
     * @summary `lastQueryTime`.
     * @description
     * 
     * Last time this periodic query was invoked. Optional if option bit 20 is
     * set, and mandatory otherwise. There is no value between creation of the
     * package and the first execution.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3, §3.2.1.1.3.
     * 
     * @public
     * @readonly
     */
    readonly lastQueryTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `lastResultNumber`.
     * @description
     * 
     * How many new records the last invocation obtained. Optional if option
     * bit 20 is set, and mandatory otherwise. There is no value between
     * creation of the package and the first execution.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3, §3.2.1.1.3.
     * 
     * @public
     * @readonly
     */
    readonly lastResultNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `numberSinceModify`.
     * @description
     * 
     * Total records obtained by running the query since this package was last
     * modified. Optional.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3.
     * 
     * @public
     * @readonly
     */
    readonly numberSinceModify: OPTIONAL<INTEGER>;
    /**
     * @summary `additionalSearchInfo`.
     * @description
     * 
     * Must not occur unless option bit 20 is set. Additional search
     * information; the service definition says the client may supply
     * information that this definition does not specify.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.3, §3.2.1.1.3.
     * 
     * @public
     * @readonly
     */
    readonly additionalSearchInfo: OPTIONAL<OtherInformation>;

    constructor (
        databaseNames: OPTIONAL<InternationalString[]>,
        actualQuery: Query,
        serverStatedPeriod: Period,
        expiration: OPTIONAL<GeneralizedTime>,
        resultSetPackage: OPTIONAL<InternationalString>,
        lastQueryTime: OPTIONAL<GeneralizedTime>,
        lastResultNumber: OPTIONAL<INTEGER>,
        numberSinceModify: OPTIONAL<INTEGER>,
        additionalSearchInfo: OPTIONAL<OtherInformation>
    ) {
        this.databaseNames = databaseNames;
        this.actualQuery = actualQuery;
        this.serverStatedPeriod = serverStatedPeriod;
        this.expiration = expiration;
        this.resultSetPackage = resultSetPackage;
        this.lastQueryTime = lastQueryTime;
        this.lastResultNumber = lastResultNumber;
        this.numberSinceModify = numberSinceModify;
        this.additionalSearchInfo = additionalSearchInfo;
    }

    /**
     * @summary Restructures an object into a ServerPart
     * @description
     * 
     * This takes an `object` and converts it to a `ServerPart`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerPart`.
     * @returns {ServerPart}
     */
    public static _from_object (_o: { [_K in keyof (ServerPart)]: (ServerPart)[_K] }): ServerPart {
        return new ServerPart(_o.databaseNames, _o.actualQuery, _o.serverStatedPeriod, _o.expiration, _o.resultSetPackage, _o.lastQueryTime, _o.lastResultNumber, _o.numberSinceModify, _o.additionalSearchInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerPart: $.ComponentSpec[] = [
    new $.ComponentSpec("databaseNames", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("actualQuery", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serverStatedPeriod", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("expiration", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("resultSetPackage", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("lastQueryTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("lastResultNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("numberSinceModify", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("additionalSearchInfo", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerPart: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServerPart
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerPart: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerPart: $.ASN1Decoder<ServerPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerPart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerPart (el: _Element): ServerPart {
    if (!_cached_decoder_for_ServerPart) { _cached_decoder_for_ServerPart = function (el: _Element): ServerPart {
    let databaseNames: OPTIONAL<InternationalString[]>;
    let actualQuery!: Query;
    let serverStatedPeriod!: Period;
    let expiration: OPTIONAL<GeneralizedTime>;
    let resultSetPackage: OPTIONAL<InternationalString>;
    let lastQueryTime: OPTIONAL<GeneralizedTime>;
    let lastResultNumber: OPTIONAL<INTEGER>;
    let numberSinceModify: OPTIONAL<INTEGER>;
    let additionalSearchInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "databaseNames": (_el: _Element): void => { databaseNames = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "actualQuery": (_el: _Element): void => { actualQuery = $._decode_explicit<Query>(() => _decode_Query)(_el); },
        "serverStatedPeriod": (_el: _Element): void => { serverStatedPeriod = $._decode_explicit<Period>(() => _decode_Period)(_el); },
        "expiration": (_el: _Element): void => { expiration = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "resultSetPackage": (_el: _Element): void => { resultSetPackage = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "lastQueryTime": (_el: _Element): void => { lastQueryTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "lastResultNumber": (_el: _Element): void => { lastResultNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "numberSinceModify": (_el: _Element): void => { numberSinceModify = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "additionalSearchInfo": (_el: _Element): void => { additionalSearchInfo = $._decode_explicit<OtherInformation>(() => _decode_OtherInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServerPart,
        _extension_additions_list_spec_for_ServerPart,
        _root_component_type_list_2_spec_for_ServerPart,
        undefined,
    );
    return new ServerPart(
        databaseNames,
        actualQuery,
        serverStatedPeriod,
        expiration,
        resultSetPackage,
        lastQueryTime,
        lastResultNumber,
        numberSinceModify,
        additionalSearchInfo
    );
}; }
    return _cached_decoder_for_ServerPart(el);
}

let _cached_encoder_for_ServerPart: $.ASN1Encoder<ServerPart> | null = null;

/**
 * @summary Encodes a(n) ServerPart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerPart, encoded as an ASN.1 Element.
 */
export
function _encode_ServerPart (value: ServerPart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerPart) { _cached_encoder_for_ServerPart = function (value: ServerPart, elGetter: $.ASN1Encoder<ServerPart>): _Element {
    const _components: _Element[] = new Array(9);
    let _components_i = 0;
    if (value.databaseNames !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.databaseNames, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Query, $.BER)(value.actualQuery, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_Period, $.BER)(value.serverStatedPeriod, $.BER);
    if (value.expiration !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeGeneralizedTime, $.BER)(value.expiration, $.BER);
    }
    if (value.resultSetPackage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.resultSetPackage, $.BER);
    }
    if (value.lastQueryTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeGeneralizedTime, $.BER)(value.lastQueryTime, $.BER);
    }
    if (value.lastResultNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.lastResultNumber, $.BER);
    }
    if (value.numberSinceModify !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.numberSinceModify, $.BER);
    }
    if (value.additionalSearchInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_OtherInformation, $.BER)(value.additionalSearchInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServerPart(value, elGetter);
}


/* eslint-enable */
